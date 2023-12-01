import express from "express";
import {
  getProduct,
  getProducts,
  addOrder,
  getReviews,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/product/:id", getReviews);
router.post("/", addOrder);

export default router;
