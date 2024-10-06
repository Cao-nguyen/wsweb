const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/admin/tintucControllers')

router.get('/', controllers.tintuc)
router.get('/create', controllers.create)
router.post('/create', controllers.createPost)

module.exports = router