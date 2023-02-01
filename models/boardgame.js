const mongoose = require('mongoose');

const boardgameSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberOfPlayers: {
    type: String,
    required: true,
  },
  playingTime: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  category1: {
    type: String,
    required: true,
  },
  category2: {
    type: String,
    required: false,
  }
});
  
module.exports = mongoose.model('Boardgame', boardgameSchema);
