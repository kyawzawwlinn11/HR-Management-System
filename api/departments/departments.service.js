const pool =  require('../../config/database')

module.exports = {
    createDepartments: (data, callBack) => {
        pool.query(
            `INSERT INTO departments VALUES(?,?,?,?)`,
            [
                data.department_id,
                data.department_name,
                data.manager_id,
                data.location_id
            ],
            (error,results,fields) => {
                if (error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, error);
            }
        );
    },
    getAllDeparments: (callBack) => {
        pool.query(
            `SELECT * FROM departments`,
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
    getDepartmentsById: (data, callBack) => {
        pool.query(
            `SELECT * FROM departments WHERE department_id = ?`,
            [data.department_id],
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