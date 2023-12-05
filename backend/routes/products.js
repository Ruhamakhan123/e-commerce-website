import express from "express";
import {
  getProduct,
  getProducts,
  addOrder,
  getReviews,
  getNow,
  getFeatured,
} from "../controllers/product.js";

const router = express.Router();
router.get("/", getFeatured);
router.get("/all", getNow);
router.get("/:id", getProduct);
router.post("/product/:id", getReviews);
router.post("/payment", addOrder);

export default router;
