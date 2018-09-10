const express = require("express");
const session= require("express-session");
const app = express();
const port = 8000;
var myParser = require("body-parser");
app.use(myParser.urlencoded({extended: true}));
var ejs = require("ejs");
var user = require("./user.js");

var sees;

app.listen(port);
app.set("view engine" , "ejs");
app.use(session({secret: "semos"}));
var users = [];


app.get("/" , (req , res)=>

{
	var name = req.query.name;
	res.render("index.ejs" , {firstName: name})
})



app.get("/login", (req, res)=>{
	res.render("login");
})

app.post("/login" , (req , res)=>{
	let email = req.body.email;
	let password = req.body.pass;
	sess = req.session;
	sess.email = email;
	res.redirect("/profile");
})

app.get("/signup" , (req ,res)=>{
	res.render("signup.ejs");
})

app.post("/signup" , (req , res)=>{
	let name = req.body.Name;
	let email = req.body.email;
	let password = req.body.pass;

	var u = new user.create(name , email , password , "user");
	users.push(u);
	sess = req.session;
	sess.email="email";

	res.redirect("/profile");
})

app.get("/profile" , (req , res)=>{
	sess = req.session;
	if(sess.email){
		res.render("profile.ejs");
	}
	else{
		res.redirect("/");
	}
	
})

app.get("/logout" , (req , res)=>{
	req.session.destroy( err => {
		if(err) console.log(err);
		else
			res.redirect("/login");
	})
})