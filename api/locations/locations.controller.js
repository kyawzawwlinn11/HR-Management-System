const {createLocations,getAllLocations,getLocationsById} = require('./locations.service');

module.exports = {
    createLocations: (req,res) => {
        const body =  req.body;
        createLocations(body, (err,results) => {
            if(err) {
                res.status(500).json({
                    success: 0,
                    message: "error on creating locations"
                })
            }
            res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getAllLocations : (req,res) => {
        getAllLocations((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on getting all the Locations."
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
    getLocationsById : (req,res) => {
        const data =  req.body;
        getLocationsById(data, (err,results)=> {
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
}