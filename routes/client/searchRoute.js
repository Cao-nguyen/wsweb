const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/searchControllers')

router.get('/', controllers.search)

module.exports = router