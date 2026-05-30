const express = require("express");
const { requireAuth } = require("../middlewares/authMiddleware");
const { HoldingsModel } = require("../model/HoldingsModel");

const router = express.Router();

router.post("/", requireAuth, async (req, res) => {
  try {
    const { message } = req.body;
    const user = req.user;
    
    const userName = user.username || "there";
    const msg = message.toLowerCase();

    // Check for intents
    const wantsHoldings = msg.includes("holding") || msg.includes("portfolio") || msg.includes("stocks");
    const wantsProfit = msg.includes("profit") || msg.includes("loss") || msg.includes("p&l") || msg.includes("pnl");
    const wantsDetails = msg.includes("detail");
    const isTellingName = msg.includes("my name is") || msg.includes("i am");

    if (wantsHoldings || wantsProfit || wantsDetails) {
      // Fetch user's holdings
      const holdings = await HoldingsModel.find({ user: user._id });

      if (holdings.length === 0) {
        return res.json({ response: `Hello ${userName}, you currently don't have any holdings in your portfolio.` });
      }

      let totalInvestment = 0;
      let currentValue = 0;
      let profitStocks = [];
      let lossStocks = [];
      let holdingsDetails = [];

      holdings.forEach(stock => {
        const invested = stock.avg * stock.qty;
        const current = stock.price * stock.qty;
        totalInvestment += invested;
        currentValue += current;
        
        holdingsDetails.push(`${stock.qty}x ${stock.name} @ ₹${stock.avg.toFixed(2)}`);

        if (current >= invested) {
          profitStocks.push(stock.name);
        } else {
          lossStocks.push(stock.name);
        }
      });

      const pnl = currentValue - totalInvestment;
      const isProfit = pnl >= 0;

      let response = `Hello ${userName}! You currently have ${holdings.length} holdings. `;
      
      if (wantsProfit) {
        response += `Your total investment is ₹${totalInvestment.toFixed(2)} and current value is ₹${currentValue.toFixed(2)}. `;
        response += `Overall, you are in a **${isProfit ? 'PROFIT' : 'LOSS'}** of ₹${Math.abs(pnl).toFixed(2)}. `;
      }

      if (wantsDetails) {
        response += `Here are your holdings: ${holdingsDetails.join(", ")}. `;
        if (profitStocks.length > 0) {
          response += `Stocks in profit: ${profitStocks.join(", ")}. `;
        }
        if (lossStocks.length > 0) {
          response += `Stocks in loss: ${lossStocks.join(", ")}. `;
        }
      }

      if (!wantsProfit && !wantsDetails) {
        response += `Your total current portfolio value is ₹${currentValue.toFixed(2)}. Ask me about your profit or loss!`;
      }

      return res.json({ response });
    }

    if (isTellingName) {
      return res.json({ response: `Nice to meet you! I am your Portfolio Assistant. You can ask me to "show my holdings", "calculate my profit/loss", or "give me my details".` });
    }

    // Default response
    return res.json({ response: `Hello ${userName}! I am your Portfolio Assistant. You can ask me to "show my holdings", "calculate my profit/loss", or "give me my details".` });

  } catch (error) {
    console.error(error);
    res.status(500).json({ response: "Sorry, I encountered an error while processing your request." });
  }
});

module.exports = router;
