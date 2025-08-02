import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import notesRoutes from "./routes/notesroutes.js";
import authRoutes from "./routes/authRoute.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware to parse JSON requests
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

// app.use((req, res, next) => {
//   // Custom middleware logic
//   console.log(`Request method is ${req.method} & request URL is ${req.url}`);
//   next();
// });
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
