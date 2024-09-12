const homeRoutes = require('./homeRoute')
const searchRoutes = require('./searchRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
    app.use('/search', searchRoutes)
}