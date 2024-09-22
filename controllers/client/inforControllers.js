// [GET] /gioithieu
module.exports.infor = async (req, res) => {
    res.render('client/pages/gioithieu/gioithieu', {
        pageTitle: 'Giới thiệu'
    })
}