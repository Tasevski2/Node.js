const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const url = "mongodb://admin:admin1@ds055885.mlab.com:55885/cas9";
var app = express();
var db;
const recipe = require("./novo");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);
app.set("view-engin","ejs");

app.get("/newRecipe", (req , res)=>
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
			res.render("allRecipes.ejs");
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