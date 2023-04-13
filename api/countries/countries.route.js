const {createCountries, getAllCountries, getCountriesById} =  require('./countries.controller');
const {employeeTokenValidation,adminTokenValidation} = require('../../auth/tokenvalidation');

const router =  require('express').Router();

router.post('/',adminTokenValidation, createCountries);
router.get('/',employeeTokenValidation, getAllCountries);
router.get('/id',employeeTokenValidation ,getCountriesById);

module.exports = router;
