const express = require('express');
const path = require('path');
const admin = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Inside another use function by express");
    console.log(admin.products);
    //res.send("<h1>Hello</h1>");
   //res.sendFile(path.join(__dirname,'../','views','shop.html'));
     res.render('shop',{prods: admin.products});
});

//modules.exports=router;
module.exports=router;
