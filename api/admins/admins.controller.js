require('dotenv').config();
const {sign} = require('jsonwebtoken')

module.exports = {
    AdminLogin : (req,res) => {
        const data =  req.body;
        if(data.admin === process.env.ADMIN_NAME && data.password === process.env.ADMIN_PASSWORD){
             const jsontoken = sign({data: data}, 'admin123', {
                expiresIn: '1h'
             })
            return res.status(200).json({
                success:0,
                message: "Successfully logged in as admin!",
                token : jsontoken
            });
        } else {
            return res.status(403).json({
              success: 0,
              message: "Invalid admin credentials.",
            });
        }
    }
}