const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event')
const { ensureAuth, ensureCreator, ensureGuest } = require('../middleware/auth')

router.get('/getEvent/:id', eventController.getEvent)

router.post('/newPotluck', ensureAuth, eventController.newPotluck)

router.delete('/deletePotluck/:id', ensureAuth, eventController.deletePotluck)

router.put('/updateName/:id', ensureCreator, eventController.updateName)

router.put('/updateDate/:id', ensureCreator, eventController.updateDate)

router.put('/updateTime/:id', ensureCreator, eventController.updateTime)

router.put('/updateLocation/:id', ensureCreator, eventController.updateLocation)

router.post('/createRequest/:id', eventController.createRequest)

router.put('/markComplete/:id/:eventId', eventController.markComplete)

router.put('/markIncomplete/:id/:eventId', eventController.markIncomplete)

router.delete('/deleteRequest/:id/:eventId', eventController.deleteRequest)

router.post('/createItem/:id', eventController.createItem)

router.delete('/deleteItem/:id/:eventId', eventController.deleteItem)

module.exports = router