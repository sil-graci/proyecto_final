import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { join, __dirname } from "./utils/index.js";

import authRoutes from './routes/auth.routes.js';
import productsRoutes from "./routes/products.routes.js"; 
import { errorHandler } from "./middlewares/error.middleware.js"; 

dotenv.config();
const app = express();

// settings
app.set("PORT", process.env.PORT || 3000);

// middlewares
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use('/auth', authRoutes);
app.use("/api/products", productsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// error handler
app.use(errorHandler); 

// listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on http://localhost:${app.get("PORT")}`);
});
