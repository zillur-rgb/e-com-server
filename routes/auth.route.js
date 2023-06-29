import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);
//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
