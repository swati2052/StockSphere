require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const authRoute = require("./routes/authRoutes");
const chatRoute = require("./routes/chatRoutes");
const { userVerification, requireAuth } = require("./middlewares/authMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrderModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(uri)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use("/", authRoute);
app.use("/chat", chatRoute);
app.post("/verify", userVerification);

// Sample endpoints that the dashboard probably expects
app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({ user: req.user._id });
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({ user: req.user._id });
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      user: req.user._id,
    });
    await newOrder.save();
    
    // Also simulate adding it to Holdings for the user so it shows up
    if (req.body.mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name: req.body.name, user: req.user._id });
      if (holding) {
        holding.qty += Number(req.body.qty);
        holding.avg = ((holding.avg * (holding.qty - req.body.qty)) + (req.body.price * req.body.qty)) / holding.qty;
        await holding.save();
      } else {
        await HoldingsModel.create({
          name: req.body.name,
          qty: req.body.qty,
          avg: req.body.price,
          price: req.body.price,
          net: "+0.00%",
          day: "+0.00%",
          user: req.user._id,
        });
      }
    }
    res.send("Order saved!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});