import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { ProductController } from "../controllers/product.controller.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  ProductController.createProduct
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  ProductController.updateProduct
);

//get products
router.get("/get-product", ProductController.getProduct);

//single product
router.get("/get-product/:slug", ProductController.getSingleProduct);

//get photo
router.get("/product-photo/:pid", ProductController.productPhoto);

//delete rproduct
router.delete("/delete-product/:pid", ProductController.deleteProduct);

//filter product
router.post("/product-filters", ProductController.productFilters);

//product count
router.get("/product-count", ProductController.productCount);

//product per page
router.get("/product-list/:page", ProductController.productList);

export const ProductRouter = router;
