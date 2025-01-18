import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  buyPrice: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  openingPrice: {
    type: Number,
    required: true,
  },
  options: {
    type: String,
    enum: ['PE', 'CE'], // Put possible values for options (PE or CE)
    required: true,
  },
  premiumType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  stoploss: {
    type: Number,
    required: true,
  },
  strikePrice: {
    type: Number,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  tradeDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  }
});

const Trade = mongoose.models.Trade || mongoose.model("Trade", tradeSchema);

export default Trade;