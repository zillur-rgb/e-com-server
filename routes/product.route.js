import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware";
import { ProductController } from "../controllers/product.controller";

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
router.delete("/product/:pid", ProductController.deleteProduct);

export const ProductRouter = router;
