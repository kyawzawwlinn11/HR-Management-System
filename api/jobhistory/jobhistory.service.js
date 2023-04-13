const pool =  require('../../config/database');

module.exports =  {
    createJobHistory: (data,callBack) => {
        pool.query(
            `INSERT INTO job_history VALUES(?,?,?,?,?)`,
            [
                data.employee_id,
                data.start_date,
                data.end_date,
                data.job_id,
                data.department_id

            ],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
                return callBack(null,results);
            }

        );
    },
    getAllJobHistories: (callBack) => {
        pool.query(
            `SELECT * FROM job_history`,
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
    getJobHistoriesById: (data, callBack) => {
        pool.query(
            `SELECT * FROM job_history WHERE employee_id = ?`,
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
}