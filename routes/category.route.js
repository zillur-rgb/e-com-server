import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { CategoryController } from "../controllers/category.controller.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CategoryController.createCategory
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  CategoryController.updateCategory
);

//getALl category
router.get("/get-category", CategoryController.getAllCategory);

//single category
router.get("/single-category/:slug", CategoryController.singleCategory);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  CategoryController.deleteCategory
);

export const CategoryRouter = router;
