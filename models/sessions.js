const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema ({
  boardgame: {      //by Id
    type: String,
    required: true,
  },
  username: {           // by username
    type: String,
    required: true,
  },
  players: {    // array
    player1: {
        type: String,
        required: true,
    },
    player2: {
        type: String,
        required: false,
    },
    player3: {
        type: String,
        required: false,
    },
    player4: {
        type: String,
        required: false,
    },
    player5: {
        type: String,
        required: false,
    },
    player6: {
        type: String,
        required: false,
    }
  },
  gameTime: {
    type: Number,
    required: true,
  },
  victory: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  }
});
  
module.exports = mongoose.model('Session', sessionSchema);