const homeRoutes = require('./homeRoute')
const searchRoutes = require('./searchRoute')
const inforRoutes = require('./inforRoute')
const thevoteRoutes = require('./thevoteRoute')
const tintucRoutes = require('./tintucRoute')
const hoptacRoutes = require('./hoptacRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
    app.use('/search', searchRoutes)
    app.use('/gioithieu', inforRoutes)
    app.use('/thevote', thevoteRoutes)
    app.use('/tintuc', tintucRoutes)
    app.use('/hoptac', hoptacRoutes)
}