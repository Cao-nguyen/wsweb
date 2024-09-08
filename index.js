const express = require('express')
// const path = require('path')
// const flash = require('express-flash')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
// const session = require('express-session')
// const methodOverride = require('method-override')
// const route = require('./routes/client/indexRoute')
// const routeAdmin = require('./routes/admin/indexRoute')
// const db = require('./config/database')
// const { Server } = require('socket.io')
// const http = require('http')
// require('dotenv').config()
const app = express()
const port = 3000 //process.env.PORT

// // fix lỗi không hiển thị được json khi dùng POST
// app.use(bodyParser.urlencoded({ 
//     extended: false
// }))
// app.use(bodyParser.json())

// // set pug
// app.set('views', `${__dirname}/views`)
// app.set('view engine', 'pug')
// app.use(express.static(`${__dirname}/public`))

// // set flash
// app.use(cookieParser('WSweb'));
// app.use(session({ cookie: { maxAge: 60000 }}));
// app.use(flash())

// // TinyMCE
// app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')))

// // set methodOverride
// app.use(methodOverride('_method'))

// // Routes
// route(app)
// routeAdmin(app)

// // Kết nối database
// db.connect()

// // 404
// app.get('*', (req, res) => {
//     res.render('./client/pages/error/404', {
//         pageTitle: 'Trang này không tồn tại'
//     })
// })
app.get('/', (req, res) => {
    res.send(`
        <h1 style="text-align: center; margin-top: 30px"> Dự án CNcode - Lý Cao Nguyên </h1>    
        <h2 style="text-align: center; margin-top: 10px"> Ngày khởi công: 7/92024 </h2>    
    `);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})