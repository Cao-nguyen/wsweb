const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/hoptacControllers.js')

router.get('/', controllers.hoptac)

module.exports = router