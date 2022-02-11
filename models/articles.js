const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    urlToImage: String,
    lang: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

const articleModel = mongoose.model('articles', articleSchema)

module.exports = articleModel