const {createRegion,getAllRegions,getRegionsById} = require('./regions.controller');

const router =  require('express').Router();
const {adminTokenValidation,employeeTokenValidation} = require('../../auth/tokenvalidation');

router.post('/', adminTokenValidation ,createRegion);
router.get('/', employeeTokenValidation,getAllRegions );
router.get('/id', employeeTokenValidation,getRegionsById);

module.exports = router;

