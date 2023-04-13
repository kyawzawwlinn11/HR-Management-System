const {createjobHistory,getAllJobHistories, getJobHistoriesById} = require('./jobhistory.controller');

const router =  require('express').Router();
const {adminTokenValidation,employeeTokenValidation} = require('../../auth/tokenvalidation')

router.post('/', adminTokenValidation, createjobHistory);
router.get('/', employeeTokenValidation,getAllJobHistories);
router.get('/id', employeeTokenValidation, getJobHistoriesById);

module.exports = router;