const express = require('express');
const shop=require('./shop')
const path = require('path');
const productController = require('../controller/products')

const router = express.Router();

const products=[];

//GET Method
router.get('/add-product',(req,res,next)=>{
    console.log("Inside use function by express");
   // res.send("<h1>Hello Inside Add Product</h1>");
   //res.send('<body><form action ="/product" method ="POST"><input type ="text" name="title"><button type ="submit">Add Product</button></input></form></body>');
   res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

//router.get('/add-product',productController.getAddProduct);

//POST Method
router.post('/product',(req,res)=>{
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

//module.exports=router;
exports.routes =router;
exports.products=products;