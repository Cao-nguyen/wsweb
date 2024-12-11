const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('News', newsSchema);
