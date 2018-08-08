var express = require("express");
var app = express();
//To be able to work with POST parameters (body of the request)
var myParser = require("body-parser");
app.use(myParser.urlencoded({extended: true}));

var user = require("./user.js");

var ejs = require("ejs");

app.set("view engine" , "ejs");

app.listen(3000);

var korisnici = [];

app.get("/" , (request , response)=>
{
	var name = "Viktor";
	var last = "Tasevski";
	response.render("index.ejs" , {firstName: name,lastName: last});
});

app.get("/register" , (request , response)=>
{
	response.render("register.ejs");
});

app.post("/register", (request , response)=>
{
	var Fname  = request.body.firstName;
	var Lname = request.body.lastName;
	var email = request.body.email;
	var pass = request.body.Pass;
	var Cpass = request.body.ConfirmPass;

	console.log(Fname + Lname + email + pass + Cpass);
	if(pass==Cpass)
	{
		var korisnik = new user.create(Fname,Lname,email,pass);
		korisnici.push(korisnik);
		response.send("Welcome to our page " + Fname);
	}
	else
		response.render("register.ejs");
	console.log(korisnici);
});

app.get("/login", (request , response)=>
{
	response.render("login.ejs");
});

app.post("/login" , (request , response)=>
{	
	var email = request.body.email;
	var pass = request.body.pass;
	for(let i=0;i<korisnici.length;i++)
	{
	if(korisnici[i].email==email && korisnici[i].pass==pass)
		response.send("Welcome!");	
	}
	response.render("login.ejs");
});


app.get("/users", (request , response)=>
{
	response.render("users.ejs",{users: korisnici});
});


