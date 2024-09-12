const homeRoutes = require('./homeRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
}