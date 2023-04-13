const pool =  require('../../config/database');

module.exports = {
    createEmployees: (data, callBack) => {
        pool.query(
            `INSERT INTO employees VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.employee_id,
                data.first_name,
                data.last_name,
                data.email,
                data.phone_number,
                data.hire_date,
                data.job_id,
                data.salary,
                data.commission,
                data.manager_id,
                data.department_id
            ],
            (error, results, fields)=> {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },
    getAllEmployees: (callBack) => {
        pool.query(
            `SELECT * FROM employees`,
            [],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },
    getEmployeesDetailsById: (data, callBack) => {
        pool.query(
            `SELECT employees.*, jobs.job_title
            FROM employees
            INNER JOIN jobs ON employees.job_id = jobs.job_id
            WHERE employees.employee_id = ?`,
            [data.employee_id],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },
    getEmployeeJobHistoryById: (data, callBack) => {
        pool.query(
            `SELECT * from job_history WHERE employee_id = ?`,
            [data.employee_id],
            (error,results,fields) =>{
                if(error){
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null,results);
            }
        );
    },
    updateEmployeeByID: (data,callBack) => {
        pool.query(
            `UPDATE employees
             SET first_name = ?,last_name = ?, email = ?, phone_number = ?, hire_date = ?, job_id = ?, salary = ?, commission = ? , manager_id = ?, department_id = ?
             WHERE employee_id = ?`,
             [
               data.first_name,
               data.last_name,
               data.email,
               data.phone_number,
               data.hire_date,
               data.job_id,
               data.salary,
               data.commission,
               data.manager_id,
               data.department_id,
               data.employee_id
             ],
             (error,results,fields) => {
                if (error) {
                    console.log(error);
                    return callBack(error);
                }
              return callBack(null, results);
             }
        );
    },
    deleteEmployeeById: (data,callBack) => {
        pool.query(
            `DELETE FROM employees WHERE employee_id = ?`,
            [data.employee_id],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
            
        );
    },
    getEmployeeByEmail: (data,callBack) => {
        pool.query(
            `SELECT * FROM employees WHERE email = ? `,
            [
                data.email,
          
             
            ],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },
    
}