const New = require('../../models/tintucModel')

// [GET] /dashboard
module.exports.tintuc = async (req, res) => {
    const news = await New.find({
        deleted: "false"
    })

    res.render('admin/pages/tintuc/tintuc', {
        pageTitle: 'Tin tức',
        news: news
    })
}

// [GET] /create
module.exports.create = async (req, res) => {
    res.render('admin/pages/tintuc/create', {
        pageTitle: 'Thêm tin tức'
    })
}

// [POST] /create
module.exports.createPost = async (req, res) => {
    const news = new New(req.body)
    await news.save()
    res.redirect('/admin/tintuc')
}