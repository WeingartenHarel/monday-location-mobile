const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
 
 // backend node js get location query .....
async function query(filterBy = {}) {
    // TODO: Build the criteria with $regex
     const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('location')

    try {
         const locationes = await collection.find().toArray();
        return locationes
    } catch (err) {
        //console.log('ERROR: cannot find locationes')
        throw err;
    }
}

async function getById(locationId) {
    const collection = await dbService.getCollection('location')
    try {
        const location = await collection.findOne({ '_id': ObjectId(locationId) })
        //delete location.password
        return location
    } catch (err) {
        //console.log(`ERROR: while finding location ${locationId}`)
        throw err;
    }
}
 
async function remove(locationId) {
    const collection = await dbService.getCollection('location')
    try {
        //ObjectId(locationId)
        await collection.deleteOne({ "_id": ObjectId(locationId) })
    } catch (err) {
        //console.log(`ERROR: cannot remove location ${locationId}`)
        throw err;
    }
}

async function add(location) {
    const collection = await dbService.getCollection('location')
    try {
        await collection.insertOne(location);
        return location;
    } catch (err) {
        //console.log(`ERROR: cannot insert location`)
        throw err;
    }
}

async function update(location) {
    const collection = await dbService.getCollection('location')
    location._id = ObjectId(location._id);
    try {
        await collection.updateOne({ _id: location._id }, { $set: location })
        return location
    } catch (err) {
        //console.log(`ERROR: cannot update location ${location._id}`)
        throw err;
    }
}


function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.name) {
        criteria.name = filterBy.name
    }
    
    return criteria;
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}


