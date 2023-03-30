const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shop = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/user',(req,res,next)=>{
    console.log("Inside use function by express");
    res.send("<h1>Hello User</h1>");
    next();
});

//app.get(shop);
app.use(adminRouter.routes);
app.use(shop);

// app.use((req,res,next)=>{
//     res.sendStatus(404).send('PAGE NOT FOUND!')
// });

// app.use('/add-product',(req,res,next)=>{
//     console.log("Inside use function by express");
//    // res.send("<h1>Hello Inside Add Product</h1>");
//     res.send('<body><form action ="/product" method ="POST"><input type ="text" name="title"><button type ="submit">Add Product</button></input></form></body>');
// });

// app.use('/product',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

//Will only trigger for post requests app.post
//Will only trigger for get requests app.get
// app.post('/product',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/');
// });



app.use('/',(req,res,next)=>{
    console.log("Inside another use function by express");
    res.send("<h1>Hello</h1>");
});

// const server=http.createServer(app);
// server.listen(2000);

app.listen(8000);