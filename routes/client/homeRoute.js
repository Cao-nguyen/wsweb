const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/homeControllers')

router.get('/', controllers.home)

module.exports = router