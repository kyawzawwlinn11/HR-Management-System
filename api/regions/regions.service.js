const pool =  require('../../config/database');

module.exports = {
    CreateRegion : (data, callBack) => {
        pool.query(
            `INSERT INTO regions VALUES (?,?)`,
            [
                data.region_id,
                data.region_name
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
    getAllRegions: (callBack) => {
        pool.query(
            `SELECT * FROM regions`,
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
    getRegionsById: (data, callBack) => {
        pool.query(
            `SELECT * FROM regions WHERE region_id = ?`,
            [data.region_id],
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