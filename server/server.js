const express = require("express")
const connection = require("./config/db")
const cors = require("cors")
const router = require("./routes/userRoutes")
const blogrouter = require("./routes/blogRoutes")



require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())



app.use("/user",router)
app.use("/blog",blogrouter)




//Connection
app.listen(process.env.PORT || 8080, async (req, res) => {
   try {
     await connection;
     console.log("connection successfull");
   } catch (error) {
     console.log("connection to database failed");
     console.log(error);
   }
   console.log(`listening on port ${process.env.PORT}`);
 });