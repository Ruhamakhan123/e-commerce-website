import { db } from "../db.js";
import pkg from "node-nlp";
import vader from "vader-sentiment";
const { SentimentIntensityAnalyzer } = pkg;

export const getRev = (req, res) => {
  const productId = req.params.id;
  const query = "SELECT * FROM reviews";

  db.query(query, productId, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

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

export const getFeatured = (req, res) => {
  const q = "select * from featured_products";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getProducts = (req, res) => {
  const q = "SELECT * FROM products";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getNow = (req, res) => {
  const productQuery =
    "SELECT p.productID, p.categoryId, p.productName, p.productDes, p.productPrice, p.productImage, " +
    "c.name, c.categoryId " +
    "FROM products p " +
    "JOIN categories c ON p.categoryId = c.categoryId";

  db.query(productQuery, [req.params.id], (err, productData) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(productData);
  });
};

export const getProduct = (req, res) => {
  const productId = req.params.id;

  const productQuery =
    "SELECT p.productID, p.productName, p.productDes, p.productPrice, p.productImage, " +
    "c.name, col.color_name, s.size_name " +
    "FROM products p " +
    "JOIN categories c ON p.categoryId = c.categoryId " +
    "JOIN colors col ON p.colorId = col.color_id " +
    "JOIN sizes s ON p.sizeId = s.size_id " +
    "WHERE p.productID = ?";

  db.query(productQuery, [productId], (err, productData) => {
    if (err) return res.status(500).json(err);

    if (productData.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = productData[0];

    const reviewsQuery =
      "SELECT review_id, user_review, sentiment FROM reviews WHERE product_id = ?";

    db.query(reviewsQuery, [productId], (reviewsErr, reviewsData) => {
      if (reviewsErr) return res.status(500).json(reviewsErr);

      // Combine product and reviews data
      const result = {
        ...product,
        reviews: reviewsData,
      };

      return res.status(200).json(result);
    });
  });
};

export const addOrder = (req, res) => {
  const date = "2002-01-03";

  const orderQuery =
    "INSERT INTO orders(`order_date`, `address` ,`card_name`, `cvv`, `exp_date`, `card_number`, `product_id`) VALUES (?)";

  const orderValues = [
    date,
    req.body.address,
    req.body.card_name,
    req.body.cvv,
    req.body.exp_date,
    req.body.card_number,
    req.body.product_id,
  ];

  db.query(orderQuery, [orderValues], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Data has been added");
  });
};
