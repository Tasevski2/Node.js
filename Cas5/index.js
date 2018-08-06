var fs = require("fs");
var http = require("http");
var url = require("url");

// fs.readFile("proizvodi.txt" , "UTF-8" , (err, data)=>
// {
// 	if(err)
// 		throw err;
// 	else
// 	{
// 		var splittedData = data.split("\n");
		
// 		for(let i=0;i<splittedData.length;i++)
// 		{

// 			let splittedDataSplited = splittedData[i].split(" ");
// 			let produkt = [];
// 			let kolicina = [];

// 			for(let i=0;i<splittedDataSplited.length;i++)
// 			{
// 				if(i%2==0)
// 					produkt.push(splittedDataSplited[i]);
// 				else
// 					kolicina.push(splittedDataSplited[i]);
// 			}

// 			for(let i=0;i<produkt.length;i++)
// 			{
// 				if(kolicina[i]<60)
// 					console.log(produkt[i]+": " +kolicina[i]);
// 			}
// 		}
// 	}
// });


// fs.readFile("proizvodi.json", (err , data)=>
// {
// 	if(err)
// 		throw err;

// 	else
// 	{
// 		var json = JSON.parse(data);
// 		finalData = "";
// 		json.forEach(proizvod =>
// 			{	
// 				var cena = proizvod.quantity * proizvod.price;
// 				finalData += "Proizvod: " + proizvod.name + "  Cena: " + cena + "\r\n";
// 			});


// 		fs.appendFile("ceni.txt" , finalData , (err) =>
// 		{
// 			if(err)
// 				throw err;

// 			else
// 			{
// 				console.log("Successfuly appended.")
// 			}
// 		})



// 	}
// })

// http.createServer( (request , response) =>
// {	
// 	switch(request.url)
// 	{
// 		case "/home": response.write("Home page");
// 					response.end();
// 					break;
// 		case "/messages": response.write("Message page");
// 						response.end();
// 						break;
// 		default:
// 			response.writeHead(404 , "Not Found");
// 			response.write("Page not found");
// 			response.end();


// 	}

// }).listen(8080);


// http.createServer((request , response) =>
// {
// 	var q = url.parse(request.url , true).query;
// 	response.write("Name: " + q.name + "\nEmail: " + q.email);
// 	// console.log(q.name);
// 	response.end();

// }).listen(8080);


var statija_1 = 
{	
	id: "1",
	title: "Naslov 1",
	content: "Content 1 Content 1 Content 1 Content 1 Content 1"
}

var statija_2 = 
{	
	id: "2",
	title: "Naslov 2",
	content: "Content 2 Content 2 Content 2 Content 2 Content 2"
}  

var statija_3 = 
{	
	id: "3",
	title: "Naslov 3",
	content: "Content 3 Content 3 Content 3 Content 3 Content 3"
}

var statija_4 = 
{	
	id: "4",
	title: "Naslov 4",
	content: "Content 4 Content 4 Content 4 Content 4 Content 4"
}

var statii = [statija_1 , statija_2 , statija_3 , statija_4];


http.createServer((request , response) => 
{	
	if(request.url == "/statii")
	{
		var naslovi =  "";
		statii.forEach(s =>{
			naslovi+=s.title +"\n";
		})


	
	response.write(naslovi);
	response.end();
	
}

	var q = url.parse(request.url , true).query;

	for(let i=0;i<statii.length;i++)
	{
		if(q.id==statii[i].name)
		{
			response.write(statii[i].content);
			response.end();
			break;
		}

	}

}).listen(8080);
