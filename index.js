var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to my API!');
})

app.get('/spinach',(req,res)=>{
    res.json({
        name:"spinach",
        bestFood:true
    })
})

app.listen(PORT,function(){
    console.log('listenin on port ' + PORT);
})