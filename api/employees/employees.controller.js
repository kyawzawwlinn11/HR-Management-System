const {createEmployees, getAllEmployees, getEmployeesDetailsById, getEmployeeJobHistoryById, updateEmployeeByID, deleteEmployeeById, getEmployeeByEmail} = require('./employees.service');
const {sign} =  require('jsonwebtoken')

module.exports = {
    createEmployees: (req,res) => {
        const body =  req.body;
        createEmployees(body, (err, results) => {
            if(err) {
                res.status(500).json({
                   success: 0,
                   message: 'error on creating employees'
                });
            res.status(200).json({
                success: 1,
                data: results,
                message: 'created successfully'
            })
            }
        })
    },
    getAllEmployees : (req,res) => {
        getAllEmployees((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on getting all the employees."
                })
             }
             if(!results || results.length === 0) {
                return res.status(404).json({
                    success:0,
                    message: "No records found."
                })
             }
        return res.status(200).json({
            success: 1,
            message: "Data retrieved successfully.",
            data: results,
            
        })
        })
    },
    getEmployeeDetailsById : (req,res) => {
        const data =  req.body;
        getEmployeesDetailsById(data, (err,results)=> {
            if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on retrieving data."
                });
            }
            if(!results || results.length === 0){
                return res.status(404).json({
                    success: 0,
                    message: "No records found."
                });
            }
        return res.status(200).json({
              success: 1,
              message: "Data retrieved successfully.",
              data: results,
        });
        });
    },
    getEmployeeJobHistoryById : (req,res) => {
        const body =  req.body;
        getEmployeeJobHistoryById(body, (err,results) =>{
            if(err){
                return res.status(500).json({
                    success: 0,
                    message: "Error on retrieving data."
                })
            }
            if(!results || results.length === 0){
                return res.status(404).json({
                    success: 0,
                    message: "No job history found."
                })
            }
        return res.status(200).json({
            success: 1,
            message: "Data retrieved successfully.",
            data: results
        })
        })
    },
    updateEmployeeById : (req,res) => {
        const body =  req.body;
        updateEmployeeByID(body, (err,results) => {
            if(err) {
             return res.status(500).json({
                success : 0,
                message: "Error on updating employee info."
             });
            }
        return res.status(200).json({
            success: 1,
            message: "Successfully updated employee info.",
            data: results
        });
        });
    },
    deleteEmployeeById :  (req,res) => {
        const body =  req.body;
        deleteEmployeeById(body, (err,results) => {
            if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on deleting the employee."
                })
            }
        return res.status(200).json({
            success: 1,
            message: "Succesfully deleted the employee."
        });
        });
    },
    employeeLogin : (req,res) => {
        const body =  req.body;
        getEmployeeByEmail(body, (err,results) => {
            if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "error"
                });
            
            }

            if(!results || results.length === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "invalid email"
                })
            }
    
            if(results.length !== 0) {
                if (body.password === results[0].password) {
                    const jsontoken = sign({data : results}, 'employee123', {
                        expiresIn: '1h'
                    });
                    return res.status(200).json({
                        success: 1,
                        message: 'Successfully Logged in',
                        token: jsontoken
                    });
                } else {
                    return res.status(404).json({
                        success: 0,
                        message: 'Invalid Password'
                    });
                }
            }
        })
    }
    
}