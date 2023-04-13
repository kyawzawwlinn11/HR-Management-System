const {createDepartments, getAllDeparments, getDepartmentsById} = require('./departments.service');

module.exports = {
    createDepartments: (req,res) => {
       const body = req.body;
       createDepartments(body, (err, results) => {
        if(err) {
            res.status(500).json({
                success: 0,
                message: "Error on creating departments"
            })
        }

        res.status(200).json({
            success: 1,
            data: results,
            message: "Created successfully"
        })
       })
    },
    getAllDepartments : (req,res) => {
        getAllDeparments((err,results) => {
             if(err) {
                return res.status(500).json({
                    success: 0,
                    message: "error on getting all the departments."
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
    getDepartmentsById : (req,res) => {
        const data =  req.body;
        getDepartmentsById(data, (err,results)=> {
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