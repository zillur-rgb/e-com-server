import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", AuthController.register);
//LOGIN || POST
router.post("/login", AuthController.login);
//Forgot Password || POST
router.post("/forgot-password", AuthController.forgotPassword);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, AuthController.updateProfile);

//Order from user
router.get("/orders", requireSignIn, AuthController.getCustomerOrders);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, AuthController.getAllOrders);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  AuthController.orderStatus
);

export default router;
