const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/inforControllers')

router.get('/', controllers.infor)

module.exports = router