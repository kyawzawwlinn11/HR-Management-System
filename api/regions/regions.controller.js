const {CreateRegion,getAllRegions,getRegionsById} = require('./regions.service');

module.exports = {
    createRegion : (req,res) => {
        body = req.body;
        CreateRegion(body,(err,results) => {
            if(err) {
                res.send(500);
            }
            res.send({
                data: results
            })
            
        })
    },
    getAllRegions : (req,res) => {
        getAllRegions((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on getting all the regions."
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
    getRegionsById : (req,res) => {
        const data =  req.body;
        getRegionsById(data, (err,results)=> {
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
