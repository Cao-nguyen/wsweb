// [GET] /dashboard
module.exports.dashboard = async (req, res) => {
    res.render('admin/pages/dashboard/dashboard', {
        pageTitle: 'Tổng quan'
    })
}