const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
const setDate = require('../middlewares/admin/setDate');
const categoryModel = require('./categoryModel');

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String },
    category_id: { type: String, default: ""},
    content: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    deleted: { type: String, default: false },
    createdBy: { 
        account_id: { type: String },
        createdAt: { 
            type: String, 
            default: Date.now
        }
    }
}, 
{
    timestamps: { default: true, get: setDate }
}, { toJSON: { getters: true }, toObject: { getters: true } })

module.exports = mongoose.model('Product', Product);