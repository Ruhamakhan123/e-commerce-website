import { db } from "../db.js";
import pkg from "node-nlp";
import vader from "vader-sentiment";
const { SentimentIntensityAnalyzer } = pkg;

export const getReviews = (req, res) => {
  const productId = req.params.id;
  const q = "SELECT review_id, user_review FROM reviews WHERE `product_id` = ?";

  db.query(q, [productId], (err, data) => {
    if (err) return res.status(500).json(err);

    let positiveCount = 0;
    let negativeCount = 0;

    data.forEach((review) => {
      const sentimentScore = vader.SentimentIntensityAnalyzer.polarity_scores(
        review.user_review
      );
      console.log(sentimentScore);
      const sentiment = sentimentScore.compound >= 0 ? "positive" : "negative";

      if (sentiment === "positive") {
        positiveCount++;
      } else {
        negativeCount++;
      }
      console.log(positiveCount);
      console.log(negativeCount);

      review.sentiment = sentiment;
      const insertSentimentQuery =
        "INSERT INTO reviews (review_id, product_id, user_review, sentiment) VALUES (?, ?, ?, ?) " +
        "ON DUPLICATE KEY UPDATE sentiment = ?";

      db.query(
        insertSentimentQuery,
        [review.review_id, productId, review.user_review, sentiment, sentiment],
        (insertErr, insertResult) => {
          if (insertErr) {
            console.error(
              "Error inserting sentiment into the database:",
              insertErr
            );
          }
        }
      );
    });

    const totalReviews = data.length;
    const positiveRatio = (positiveCount / totalReviews) * 100;
    const negativeRatio = (negativeCount / totalReviews) * 100;
    console.log();

    return res.status(200).json({
      reviews: data,
      positiveRatio,
      negativeRatio,
    });
  });
};

export const getProducts = (req, res) => {
  const q = req.query.cat
    ? "SELECT productName, productDes, productPrice, productImage FROM products WHERE categoryId=?"
    : "SELECT productName, productDes, productPrice, productImage FROM products";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const getProduct = (req, res) => {
  const q =
    "SELECT productID, productName, productDes, productPrice, productImage, categoryId, colorId, sizeId FROM products WHERE productID = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(data[0]);
  });
};

export const addOrder = (req, res) => {
  const date = new Date(req.body.order_date);

  const orderQuery =
    "INSERT INTO orders(order_date, card_name, cvv, exp_date, card_number, address, total_amount, product_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  const orderValues = [
    date || null,
    req.body.card_name,
    req.body.cvv,
    req.body.exp_date,
    req.body.card_number,
    req.body.address,
    req.body.total_amount,
    req.body.product_id,
  ];

  const orderDetailsQuery =
    "INSERT INTO order_details(order_id, product_id, quantity, size_id, color_id) VALUES (?, ?, ?, ?, ?)";

  const orderDetailsValues = [
    req.body.product_id,
    req.body.quantity,
    req.body.size_id,
    req.body.color_id,
  ];

  db.beginTransaction((err) => {
    if (err) throw err;

    db.query(orderQuery, [orderValues], (err, orderResult) => {
      if (err) {
        db.rollback(() => {
          res.status(500).json(err);
        });
      }

      const order_id = orderResult.insertId;

      db.query(
        orderDetailsQuery,
        [order_id, ...orderDetailsValues],
        (err, detailsResult) => {
          if (err) {
            db.rollback(() => {
              res.status(500).json(err);
            });
          }

          db.commit((err) => {
            if (err) {
              db.rollback(() => {
                res.status(500).json(err);
              });
            }

            res.json("Order has been created.");
          });
        }
      );
    });
  });
};
