# Roadmap

## Server Setup

1. Run this command to initialize package `npm init -y`
2. Run this command `npm i express mongoose dotenv` 
3. Insert this code after `script:{...},` line
   1. `"type": "module"`
4. Create a folder with a name of `backend` and add a file of `server.js` 
5. Add the following code in `server.js`
   1. ```js
      import express from "express";

      const app = express();

      app.get("/", (req, res) =>{
        res.send('Hi Welcome to the server ')
      })

      app.listen(5000, () =>{
        console.log('server started port on 5000:');
      })
      ```
6. Run this command to add `nodemon` in dev dependency:
   1. `npm i nodemon -D`
7. Add this line in script
   1. ```json
      "scripts": {
        "dev": "nodemon ./backend/server.js"
      },
      ```
  