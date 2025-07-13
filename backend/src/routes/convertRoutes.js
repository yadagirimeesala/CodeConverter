const express=require('express');
const router=express.Router();

const { convertCode }=require('../controllers/convertController');

router.post('/',convertCode);

module.exports=router;