const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/tintucControllers')

router.get('/', controllers.tintuc)

module.exports = router