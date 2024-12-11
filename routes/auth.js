const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/login', (req, res) => res.render('login'));

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.render('login', { error: 'Sai tên đăng nhập hoặc mật khẩu' });
    }
    req.session.user = { id: user._id, username: user.username, role: user.role };
    res.redirect('/');
});

router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    await User.create({ username, password });
    res.redirect('/auth/login');
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
