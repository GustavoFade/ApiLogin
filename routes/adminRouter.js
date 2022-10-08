const express = require('express');
const router = express.Router();
const auth = require('../controllers/authContrller');

router.get('/', auth,(req,res)=>{
    if (req.user.admin) {
        res.send("Dados só permitidos ao admin")
        
    } else {
        res.status(401).send('Access Denied');
    }
})

module.exports = router;