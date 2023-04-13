const {createLocations,getAllLocations,getLocationsById} = require('./locations.controller');

const router = require('express').Router();
const {adminTokenValidation,employeeTokenValidation} = require('../../auth/tokenvalidation');

router.post('/', adminTokenValidation ,createLocations);
router.get('/', employeeTokenValidation ,getAllLocations);
router.get('/id',employeeTokenValidation ,getLocationsById);

module.exports = router;
