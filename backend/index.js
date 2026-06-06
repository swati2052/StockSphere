require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { requireAuth } = require("./middlewares/authMiddleware");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/chat", chatRoutes);

app.get("/allHoldings", requireAuth, async (req, res) => {
  let allHoldings = await HoldingsModel.find({ user: req.user._id });
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    user: req.user._id,
  });

  await newOrder.save();

  const existingHolding = await HoldingsModel.findOne({ name: req.body.name, user: req.user._id });
  if (existingHolding) {
    if (req.body.mode === "BUY") {
      let newQty = existingHolding.qty + Number(req.body.qty);
      let newAvg = ((existingHolding.avg * existingHolding.qty) + (Number(req.body.price) * Number(req.body.qty))) / newQty;
      existingHolding.qty = newQty;
      existingHolding.avg = newAvg;
      await existingHolding.save();
    } else if (req.body.mode === "SELL") {
      let newQty = existingHolding.qty - Number(req.body.qty);
      if (newQty > 0) {
        existingHolding.qty = newQty;
        await existingHolding.save();
      } else {
        await HoldingsModel.deleteOne({ _id: existingHolding._id });
      }
    }
  } else {
    if (req.body.mode === "BUY") {
      let newHolding = new HoldingsModel({
        name: req.body.name,
        qty: req.body.qty,
        avg: req.body.price,
        price: req.body.price,
        net: "+0.00%",
        day: "+0.00%",
        user: req.user._id,
      });
      await newHolding.save();
    }
  }

  res.send("Order saved!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB started!");
  });
}

module.exports = app;

