const {createEmployees,getAllEmployees, getEmployeeDetailsById, getEmployeeJobHistoryById,updateEmployeeById, deleteEmployeeById, employeeLogin} = require('./employees.controller');


const router =  require('express').Router();
const {employeeTokenValidation,adminTokenValidation} = require('../../auth/tokenvalidation');

router.post('/', adminTokenValidation ,createEmployees);
router.get('/',employeeTokenValidation, getAllEmployees);
router.get('/details', employeeTokenValidation, getEmployeeDetailsById);
router.get('/jobhistory', employeeTokenValidation ,getEmployeeJobHistoryById);
router.patch('/update', adminTokenValidation,updateEmployeeById);
router.delete('/delete', adminTokenValidation, deleteEmployeeById);
router.post('/login',employeeLogin);

module.exports = router;