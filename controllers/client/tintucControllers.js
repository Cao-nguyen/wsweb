// [GET] /tintuc
module.exports.tintuc = async (req, res) => {
    res.render('client/pages/tintuc/tintuc.pug', {
        pageTitle: 'Tin tức'
    })
}