const express = require('express')
const {requireAuth, requireAdmin,requireUser} = require('../../middlewares/requireAuth.middleware')
const {addLocation,updateLocation, getLocations, getLocation, deleteLocation} = require('./location.controller')
const router = express.Router()

// middleware that is specific to this router

//router.use(requireUser)
//router.use(requireAdmin)
router.get('/', getLocations) //requireUser
router.get('/:id', getLocation) //requireUser

router.post('/' , addLocation) //,requireAdmin
router.put('/:id', updateLocation) //, requireAdmin
router.delete('/:id', deleteLocation) //, requireAdmin

module.exports = router