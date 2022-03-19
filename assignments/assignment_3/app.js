const express = require('express');
const app=express();
var bodyParser = require('body-parser')
app.use(bodyParser());
app.set('views','./views');
app.set('views engine','ejs');
var users = [{
    name:"Saipraveen",
    age:22,
    email:"saipraveen@gmail.com",
    profession:"studying",
    city:"srikakulam"
},
{
    name:"mani",
    age:23,
    email:"mani@gmail.com",
    profession:"chemical",
    city:"vizianagaram"
},{
    name:"abhisheik",
    age:22,
    email:"abhi@gmail.com",
    profession:"chemical",
    city:"tirupathi"
},{
    name:"uday",
    age:24,
    email:"uday@gmail.com",
    profession:"L&T working",
    city:"Rajamundry"
}];
app.get("/",(req,res)=>{
    res.render('index.ejs',{users});
})
app.get("/form",(req,res)=>{
    res.render('form.ejs');
})
app.post("/user/add",(req,res)=>{
    users.push({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    profession:req.body.profession,
    city:req.body.city
    })
    res.redirect('/');
})
app.listen(3000,()=>console.log('hello'))