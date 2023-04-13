const {createJobs, getAllJobs, getJobsById} = require('./jobs.service');

module.exports = {
    createJobs: (req,res) => {
        const body= req.body;
        createJobs(body, (err,results) => {
            if(err) {
                res.status(500).json({
                  success: 0,
                  message: "error on creating jobs"
                })
            }
            res.status(200).json({
                success: 1,
                data: results,
                message: "created successfully"
            })
        })
    },
    getAllJobs : (req,res) => {
        getAllJobs((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "error on getting all the jobs."
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
            message: "successfully retrieved.",
            data: results,
            
        })
        })
    },
    getJobsById : (req,res) => {
        const data =  req.body;
        getJobsById(data, (err,results)=> {
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