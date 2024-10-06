const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const News = new Schema({
    title: { type: String }, 
    image: { type: String }, 
    content: { type: String }, 
    slug: { type: String }, 
    deleted: { type: String, default: false },
}, 
{
    timestamps: { default: true }
})

module.exports = mongoose.model('news', News);