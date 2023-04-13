const {createCountries, getAllCountries, getCountriesById, updateCountriesById} =  require('./countries.service');

module.exports = {
    createCountries : (req,res) => {
        body = req.body;
        createCountries(body, (err, results)=> {
            if(err) {
                res.status(500).json({
                    success: 0,
                    message: "error occured creating countries"

                });
            }
            res.status(200).json({
                success: 1,
                data: results,
            })
        })
    },
    getAllCountries : (req,res) => {
        getAllCountries((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "error on getting all the countries"
                })
             }
             if(!results) {
                return res.status(404).json({
                    success:0,
                    message: "No records found"
                })
             }
        return res.status(200).json({
            success: 1,
            message: "successfully retrieved",
            data: results,
            
        })
        })
    },
    getCountriesById : (req,res) => {
        const data =  req.body;
        getCountriesById(data, (err,results)=> {
            if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on retrieving data."
                });
            }
            if(!results){
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
    
}
