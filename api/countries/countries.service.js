const pool =  require('../../config/database');

module.exports = {
    createCountries : (data,callBack) => {
        pool.query(
            `INSERT INTO countries VALUES(?,?,?)`,
            [
                data.country_id,
                data.country_name,
                data.region_id
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
    getAllCountries: (callBack) => {
        pool.query(
            `SELECT * FROM countries`,
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
    getCountriesById: (data, callBack) => {
        pool.query(
            `SELECT * FROM countries WHERE country_id = ?`,
            [data.country_id],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },
    updateCountriesById: (data,callBack) => {
       
       pool.query(
            `UPDATE countries SET country_id=?, country_name =? , region_id = ? WHERE country_id = ?`,
            [
                data.new_country_id,
                data.country_name,
                data.region_id,
                data.country_id
            ],
        (error,results,fields) => {
            if(error) {
              console.log(error);
              return callBack(error);
            }
        return callBack(null, results);
        }
        );
        
    }
}