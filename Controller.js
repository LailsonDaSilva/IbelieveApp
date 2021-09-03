const express = require('express');
const cors = require('cors');
const bodyParser = require('body-Parser');

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));

let port= process.env.PORT || 3000;

app.get('/',(req, res)=>{
        res.send('Meu servidor rodando');
});

app.listen(port,( res, req)=> {

    console.log("servidor rodando");
});