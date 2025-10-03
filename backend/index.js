require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

const app = express();

// -------- Middleware --------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Proper CORS setup
const corsOptions = {
  origin: [
    "http://localhost:3001", // frontend
    "http://localhost:3000", // dashboard
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// -------- Routes --------
app.use("/api/auth", authRoute); // all auth routes prefixed with /api/auth

// Example routes for holdings, positions, orders
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

  await newOrder.save();
  res.send("Order saved!");
});

// -------- Start Server & Connect DB --------
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
