const New = require('../../models/tintucModel')

// [GET] /tintuc
module.exports.tintuc = async (req, res) => {
    const news = await New.find({
        deleted: "false"
    })

    res.render('client/pages/tintuc/tintuc.pug', {
        pageTitle: 'Tin tức',
        news: news
    })
}