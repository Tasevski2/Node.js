const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const session = require("express-session");

const url = "mongodb://admin:admin1@ds055885.mlab.com:55885/cas9";
var app = express();
var db;
var ses;
const recipe = require("./novo");
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:"bilosto"}));

app.listen(3000);
app.set("view-engine","ejs");



app.get("/" , (req , res)=>
{
	res.render("index.ejs");
});

app.get("/login" , (req , res)=>
	{
		res.render("login.ejs")
	}); 
app.post("/login" , (req , res)=>
{
	ses = req.session;
	ses.email = "123";
	res.redirect("/newRecipe");
});

app.get("/newRecipe", checkPermissions(), (req , res)=>
{
		res.render("recipe.ejs");
});



app.post("/newRecipe" , (req , res)=>
{
	let recName = req.body.recName;
	let ingridients = req.body.ingridients;
	let prepTime = req.body.prepTime;

	let r = new recipe.create(recName, ingridients, prepTime);
	
	db.collection("recipes").insertOne(r, (err)=>
	{
		if(err) console.log(err)
		else{
			console.log("new recipe added");
			res.redirect("/allRecipes");
		}
	})	
})


app.get("/allRecipes" , (req , res)=>
{
	db.collection("recipes").find({}).toArray((err,result)=>
	{
		res.render("allRecipes.ejs",{recipes: result})
	})


})



mongoClient.connect(url, (err, client)=>
	{
		if(err) console.log(err);
		else
		{
			db = client.db("cas9");
			console.log("connected");
		}
	});


app.get("/recipes" , (req , res)=>
{
	let time = req.query.time;

	// db.collection("recipes").find({time: time}).toArray((err,result)=>
	// {
	// 	res.send(result);
	// })

	db.collection("recipes").find({ingridients:{$regex: ".*kvasec.*"}}).toArray((err , result)=>
	{
		// res.send(result);	

		res.render("allRecipes.ejs", {recipes: result});
	})
});



function checkPermissions()
{

	return (req, res, next) =>
	{
		ses=req.seesion;
	if(ses.email)
		next();
	else
	res.redirect("/");

	}
}

























// mongoClient.connect(url, (err, client)=>
// 	{
// 		if(err) console.log(err);
// 		else
// 		{
// 			db = client.db("cas9");
// 			console.log("connected");

			// var myObject = {
			// 	name: "Viktor" ,
			// 	age: 18
			// };

			// db.collection("test").insertOne(myObject, (err)=>
			// {
			// 	if(err) console.log(err);
			// 	else
			// 		console.log("one object inserted.");
			// });

		// db.collection("test").findOne({name: "Viktor"} , (err, result)=>
		// {
		// 	if(err) console.log(err);
		// 	else
		// 	{
		// 		console.log(result);
		// 	}
		// })

		//Update Document
		// var changedObject = {
		// 	name: "Viktor" , 
		// 	age: 30
		// } 
		// var myquery = {name: "Viktor"};
		// var newValues = {$set: changedObject};

		// db.collection("test").updateOne(myquery , newValues , (err)=>
		// {
		// 	if(err)
		// 	 	console.log(err)
		// 	else
		// 		{
		// 			console.log("One document update");
		// 		}
		// });
		
		

// });