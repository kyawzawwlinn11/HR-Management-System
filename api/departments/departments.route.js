const {createDepartments, getAllDepartments, getDepartmentsById} = require('./departments.controller');
const {adminTokenValidation,employeeTokenValidation} = require('../../auth/tokenvalidation');

const router  =  require('express').Router();

router.post('/',adminTokenValidation ,createDepartments);
router.get('/', employeeTokenValidation,getAllDepartments);
router.get('/id', employeeTokenValidation, getDepartmentsById);

module.exports = router;