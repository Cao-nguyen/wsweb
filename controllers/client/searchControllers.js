const New = require('../../models/tintucModel')

// [GET] /search
module.exports.search = async(req, res) => {
    const keyword = req.query.keyword

    if(keyword) {
        const keywordRegex = new RegExp(keyword, "i")

        const news = await New.find({
            title: keywordRegex,
            deleted: false
        })

        res.render('client/pages/search/search', {
            pageTitle: 'Kết quả tìm kiếm',
            keyword: keyword,
            news: news
        })
    }
}