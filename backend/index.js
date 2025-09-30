require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(cookieParser());
app.use(express.json());// replaces body-parser.json()
app.use("/", authRoute);
app.use(express.urlencoded({ extended: true })); // handles form data


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode: req.body.mode,
  });

  newOrder.save();
  res.send("Orders saved!");
});

app.listen(PORT, () => {
  console.log("App Started");
  mongoose.connect(uri);
  console.log("DB connected!");
});
