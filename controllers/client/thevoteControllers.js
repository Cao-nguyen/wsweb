// [GET] /thevote
module.exports.thevote = async (req, res) => {
    res.render('client/pages/thevote/thevote', {
        pageTitle: 'The vote'
    })
}