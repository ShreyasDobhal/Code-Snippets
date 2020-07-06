const express = require('express');
const router = express.Router();

// END PONTS
router.get('/',(req,res)=>{
    res.send('Sample Route');
});

module.exports = router;
