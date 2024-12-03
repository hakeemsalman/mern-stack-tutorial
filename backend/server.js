import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.mode.js";

dotenv.config();

const app = express();

app.get("/", (req, res) =>{
  res.send('Hi Welcome to the server ')
})

app.use(express.json());                                       // It's a middle ware that parses the request.body into json
app.post("/api/products", async (req, res) => {                // best practice to use api/..
   const product = req.body;                                   // user will send this data

   if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: "Please provide all fields" });
   }

   const newProduct = new Product(product);                     // ./models/product.model.js

   try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
   } catch (error) {
      console.error("Error in Create product:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
   }
});

app.listen(5000, () =>{
  connectDB();
  console.log('listening port on 5000:');
})