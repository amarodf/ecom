const express = require('express')
const main = require('./config/mongoose')
const dotenv = require('dotenv')
const cors = require("cors");
const bodyParser = require('body-parser')
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const paypalRoute = require("./routes/paypal");

const app = express()
const port = 3001
dotenv.config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json())
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", paypalRoute);

app.listen(port, () => {
  main()
  console.log(`Example app listening on port ${port}`)
})