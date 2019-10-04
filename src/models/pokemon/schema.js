const mongoose = require('mongoose');

const pokemon = mongoose.Schema({
  title: { type: String, required: true },
  content: {type: String, required: true},
});

module.exports = mongoose.model('Todo', todo);
