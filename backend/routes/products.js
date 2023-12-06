import express from "express";
import {
  getProduct,
  getProducts,
  addOrder,
  getReviews,
  getNow,
  getFeatured,
  getRev,
} from "../controllers/product.js";

const router = express.Router();
router.get("/", getFeatured);
router.get("/all", getNow);
router.get("/:id", getProduct);
router.post("/product/:id", getReviews);
router.post("/payment", addOrder);
router.get("/review/:id", getRev);

export default router;
