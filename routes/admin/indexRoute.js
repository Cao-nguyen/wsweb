const dashboardRoutes = require('./dashboardRoute')
const tintucRoutes = require('./tintucRoute')

module.exports = (app) => {
    app.use('/admin/dashboard', dashboardRoutes)
    app.use('/admin/tintuc', tintucRoutes)
}