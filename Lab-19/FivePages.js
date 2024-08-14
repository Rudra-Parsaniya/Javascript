const express = require('express');
const app= express()
const fs = require('fs')
app.get('/',(req,res)=>{
           res.send("hello world");
})
app.get('/home',(req,res)=>{
    res.send("hello Page");
})
app.get('/about',(req,res)=>{
    res.send("About page");
})
app.get('/contact',(req,res)=>{
    res.send("contact page");
})
app.get('/gohome',(req,res)=>{
    res.send("Bhag Chal");
})
app.listen(9000,()=>{
    console.log("server running");
})