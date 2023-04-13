const {verify} =  require('jsonwebtoken');

module.exports = {
    employeeTokenValidation : (req,res,next) =>{
        var token =  req.get("authorization");
        if(token) {
        token =  token.slice(7);
        verify(token, "employee123", (err,decoded) => {
            if(err) {
                console.log(err)
                return res.status(403).json({
                    success: 0,
                    message: "Invalid employee token"
                })
            } else {
                next();
            }
        })
        } else {
            return res.status(403).json({
                success: 0,
                message: "Unauthorized employee! Only authrized Employees can access this."
            })
        }
    },
    adminTokenValidation : (req,res,next) => {
        var token  =  req.get('authorization');
        if(token) { 
          token = token.slice(7);
          verify(token, "admin123", (err,decoded) => {
            if(err){
                return res.status(403).json({
                    success: 0,
                    message: "Invalid admin token"
                })
            } else {
                next();
            }
          })
        } else {
            return res.status(403).json({
                success: 0,
                message: 'Unauthorized Admin'
            });
        }

    }
}