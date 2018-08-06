var express = require("express");
var ejs = require("ejs");


var app = express();

//To get absolute path of my projcet
var path = require("path");
var user = require("./user");
var article = require("./article");

app.set("view engine", "ejs")

app.listen(3000);

// var user1 = new user.create("Petko" , "Petkov" , "petko@hotmail.com" , "18");
// var user2 = new user.create("Stanko" , "Stankov" , "stanko@hotmail.com" , "19");
// var user3 = new user.create("Mirce" , "Mircevski" , "mirce@hotmail.com" , "20");

// var users = [user1 , user2 , user3];

// app.get("/" , (request , response)=>
// {
// 	var name = "Vikor";

// 	response.render("index", {firstName : name});
// });

// app.get("/users" , (request , response)=>
// {
// 	response.render("users");
// });	



// app.get("/user" , (request, response)=>
// {		
// 	var name = request.query.name;
// 	users.forEach( u =>
// 	{
// 		if(name == u.firstName)
// 			response.render("user.ejs" , {user: u});
		
// 	});
// 	response.render("errorPage");
// 	// var user = users[name];
// });


var article_1 = new article.create("1" , "Example" , "Example content");

app.get("/article" , (request, response)=>
{
	var title = request.query.title;
	if(title == article_1.title)
		response.render("article", {a : article_1});
	else
		response.render("errorPage");		
})
	




// app.get("/users", (request , response)=>
// {
// 	// response.send("Users");
// 	var filePath = path.join(__dirname + "/users.html");
// 	response.sendFile(filePath);
// });


// app.get("/myPage", (request , response)=>
// {	
// 	var fileMyPage = path.join(__dirname + "/myPage.html");
// 	response.sendFile(fileMyPage);
// });



// app.get("/user" , (request , response)=>
// {
// 	var id= request.query.id;
// 	console.log(id); 
// });




