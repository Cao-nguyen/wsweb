// [GET] /
module.exports.home = async (req, res) => {
    res.render('client/pages/home/home.pug', {
        pageTitle: 'Trang chủ'
    })
}