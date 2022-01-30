const logger = require('../../services/logger.service')
const locationService = require('./location.service')

// TODO: needs error handling! try, catch

async function getLocations(req, res) {
    try {
        //console.log()
        const locationes = await locationService.query(req.query)
        ////console.log('locationes',locationes)
        res.send(locationes)
    } catch (err) {
        logger.error('Cannot get locationes', err);
        res.status(500).send({ error: 'cannot get locationes' })

    }
}

async function getLocation(req, res) {
    ////console.log('location controller',req.params.id)
    const location = await locationService.getById(req.params.id)
    ////console.log('location controller',location)
    res.send(location)
}

async function deleteLocation(req, res) {
    //console.log('location controller delete',req.params.id)
    try {
        await locationService.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete location', err);
        res.status(500).send({ error: 'cannot delete location' })
    }
}

async function addLocation(req, res) {
    try {
        var location = req.body;
        location = await locationService.add(location)
    } catch (err) {
        logger.error('Cannot add location', err);

    }
   
    //location.byUser = req.session.location;
    // TODO - need to find aboutUser
    //location.aboutUser = {}
    res.send(location)
}

async function updateLocation(req, res) {
    try{
        const location = req.body;
        //console.log('controlller updateLocation',location)
        
        await locationService.update(location)
        res.send(location)
    }catch(err){
        //console.log(' CUS AMAK ERORR IN UPDATEING BLYAT !!!!!!!!!!!!! :',err);
    }
}

module.exports = {
    getLocations,
    getLocation,
    deleteLocation,
    addLocation,
    updateLocation
}