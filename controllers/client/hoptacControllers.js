// [GET] /hoptac
module.exports.hoptac = async (req, res) => {
    res.render('client/pages/hoptac/hoptac', {
        pageTitle: 'Hợp tác'
    })
}