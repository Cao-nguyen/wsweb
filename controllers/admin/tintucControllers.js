const News = require('../../models/tintucModel')

// [GET] /dashboard
module.exports.tintuc = async (req, res) => {
    // const news = await News.find({
    //     deleted: "false"
    // })

    res.render('admin/pages/tintuc/tintuc', {
        pageTitle: 'Tin tức',
        // news: news
    })
}

// [GET] /create
module.exports.create = async (req, res) => {
    res.render('admin/pages/tintuc/create', {
        pageTitle: 'Thêm tin tức'
    })
}