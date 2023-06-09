import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();
connectDB();
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Api is running on port ${PORT}.`);
});

app.use('/api/products', productRoutes)

app.use('/api/product', productRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.use('/api/order', orderRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgYellow.bold
  )
)