const router =  require('express').Router();
const {AdminLogin} =  require('./admins.controller');


router.post('/', AdminLogin);

module.exports = router;