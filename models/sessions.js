const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema ({
  boardgame: {      //by Id
    type: String,
    required: true,
  },
  user: {           // by username
    type: String,
    required: true,
  },
  players: {    // array
    str: {
        type: String,
        required: true,
    },
    str: {
        type: String,
        required: false,
    },
    str: {
        type: String,
        required: false,
    },
    str: {
        type: String,
        required: false,
    },
    str: {
        type: String,
        required: false,
    },
    str: {
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