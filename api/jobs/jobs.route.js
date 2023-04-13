const {createJobs,getAllJobs,getJobsById} = require('./jobs.controller');

const router =  require('express').Router();
const {adminTokenValidation, employeeTokenValidation} = require('../../auth/tokenvalidation');

router.post('/',adminTokenValidation ,createJobs);
router.get('/', employeeTokenValidation ,getAllJobs);
router.get('/id', employeeTokenValidation,getJobsById);

module.exports =  router;

