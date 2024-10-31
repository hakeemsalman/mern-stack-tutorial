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
  
## Mongo DB setup

1. Create a file name with `.env` in the **root** folder.
   1. Copy this code: `MONGODB_URI=`
2. Signup for MongoDB page [MonogoDB Sign Up](https://www.mongodb.com/community/forums/signup)
3. Create a `Cluster`
4. Click on **FREE option** > **Create Deployment**
5. Copy `Password`, later w'll use it.
6. Select the button **Database user** > **Choose a connection method**
7. Click on **Drivers** > Select `node.js`.
8. Wait a while, you'll see the **connection string**. Copy it.
9. Paste the **string** besige the `MONGODB_URI=<YOUR_STRING>`
   1.  If `<password>` is not available in string, then add password into the string. 
10. Click on the **Network Access** on left side menu > **Add IP address** > **Allow access from anywhere** > **Confirm**
11. Now modify the `server.js` as shown below:
    1.  ```js
        import express from "express";
        import dotenv from "dotenv";

        const app = express();

        dotenv.config();

        app.get("/", (req, res) =>{
          res.send('Hi Welcome to the server ')
        })

        // for development use
        console.log(process.env.MONGODB_URI)

        app.listen(5000, () =>{
          console.log('listening port on 5000:');
        })
        ```

### Connecting the db

1. Create a `config/db.js` in **backend** folder.
2. Copy this code and write into `db.js` file:
    1.  ```js
         import mongoose from "mongoose";

         export const connectDB = async () => {
            try {
               const conn = await mongoose.connect(process.env.MONGODB_URI);
               console.log('MongoDB connected',conn.connection.host);
            } catch (error) {
               console.error('Server ERRRO:',error.message);
            }
         }
         ```
3. Now write this code in `server.js`:
   1. ```js
      // ....
      import { connectDB } from "./config/db.js";

      // .....
      app.listen(5000, () =>{
         connectDB();                // <------- call the MongoDB function
         console.log('listening port on 5000:');
      })
      ```

## Creating the Database

1. Create a file in the this folder `/backend/models/product.model.js`
2. 