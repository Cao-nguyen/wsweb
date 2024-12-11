const express = require('express');
const News = require('../models/News');
const router = express.Router();

router.get('/', async (req, res) => {
    const newsList = await News.find();
    res.render('news', { news: newsList, user: req.session.user });
});

router.post('/vote/:id', async (req, res) => {
    const news = await News.findById(req.params.id);
    news.votes += 1;
    await news.save();
    res.redirect('/news');
});

module.exports = router;
