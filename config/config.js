import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  DB_URL: process.env.DB_URL,
  jwt_secret: process.env.JWT_SECRET,
};
