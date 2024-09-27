const express  = require("express")
// const cors = require('cors')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const contactRoute = require("./router/Contact")
const aboutUsRoute = require("./router/About")
const reviewRoute = require("./router/CustomerReviews")
const cors = require('cors');



// app.use(cors())

app.use(cors({
    origin: 'http://localhost:3000',
  }));

dotenv.config()


mongoose.connect(
    process.env.MONGO_URL
)
.then(() => console.log("DBConnection Successfull!"))
.catch((err) => {
    console.log(err)
})


app.get("/test", (req, res) => {
    res.send("Test route is working!");
});


app.use(express.json())
app.use("/construction", contactRoute)
app.use("/construction", aboutUsRoute)
app.use("/construction", reviewRoute)




app.listen(process.env.PORT || 5000, () => {
    console.log((`Backend Server is Running on port ${process.env.PORT }`))
})
