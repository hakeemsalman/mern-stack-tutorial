import express from "express";

const app = express();

app.get("/", (req, res) =>{
  res.send('Hi Welcome to the server ')
})

app.listen(5000, () =>{
  console.log('listening port on 5000:');
})