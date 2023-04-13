const pool =  require('../../config/database');

module.exports = {
    createJobs : (data, callBack) =>{
       pool.query(
        `INSERT INTO jobs VALUES(?,?,?,?)`,
        [
            data.job_id,
            data.job_title,
            data.min_salary,
            data.max_salary
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
    getAllJobs: (callBack) => {
        pool.query(
            `SELECT * FROM jobs`,
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
    getJobsById: (data, callBack) => {
        pool.query(
            `SELECT * FROM jobs WHERE job_id = ?`,
            [data.job_id],
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