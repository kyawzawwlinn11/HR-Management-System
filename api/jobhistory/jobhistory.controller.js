const {createJobHistory,getAllJobHistories,getJobHistoriesById} = require('./jobhistory.service');

module.exports = {
    createjobHistory : (req,res) => {
        const body =  req.body;
        createJobHistory(body, (err, results) => {
           if(err) {
            res.status(500).json({
                success: 0,
                message: "Error on creating job history"
             });
           }
           res.status(200).json({
              success: 1,
              data: results,
              message: 'created successfully'
           });
        
        })
    },
    getAllJobHistories : (req,res) => {
        getAllJobHistories((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error on getting all the job histories."
                })
             }
             if(!results) {
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
    getJobHistoriesById : (req,res) => {
        const data =  req.body;
        getJobHistoriesById(data, (err,results)=> {
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