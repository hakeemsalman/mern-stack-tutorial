import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) =>{
  res.send('Hi Welcome to the server ')
})


app.listen(5000, () =>{
  connectDB();
  console.log('listening port on 5000:');
})