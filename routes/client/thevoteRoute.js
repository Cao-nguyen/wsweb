const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/thevoteControllers')

router.get('/', controllers.thevote)

module.exports = router