const pool  = require('../../config/database');

module.exports = {
    createLocations: (data,callBack) => {
        pool.query(
            `INSERT INTO locations VALUES (?,?,?,?,?,?)`,
            [
                data.location_id,
                data.street_address,
                data.postal_code,
                data.city,
                data.state,
                data.country_id,
            ]
        )
    },
    getAllLocations: (callBack) => {
        pool.query(
            `SELECT * FROM locations`,
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
    getLocationsById: (data, callBack) => {
        pool.query(
            `SELECT * FROM locations WHERE location_id = ?`,
            [data.location_id],
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