const express = require('express');
const app = express();
const port = 5176;
const route = require('./Routes/userRoutes');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',route);

app.listen(port,(req,res)=>{
    console.log(`server runing on ${port}`)
})