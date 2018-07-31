var http = require("http");
var url = require("url");

// http.createServer(function (request, response)
// {
// 	response.writeHead(200,"OK");
// 	response.write("Zdravo");
// 	response.end();

// }).listen(3000); //8080, 1337, 4000, 8000

// http.createServer(function (request , response)
// {
// 	console.log(request.url);

// 	if(request.url == "/gocedelcev")
// 	{
// 		response.writeHead(200, "OK");
// 		response.write("Goce Delcev's page")
// 		response.end();
// 	}

// 	else if(request.url == "/messages")
// 	{
// 		response.writeHead(200 , "OK");

// 		response.write("Page for messages.");
// 		response.end();
// 	}
// 	else
// 	{
// 		response.writeHead(404,"Not found");
// 		response.write("Page not found");
// 		response.end();
// 	}
// }).listen(3000);


http.createServer(function(request , response)
{
	var q1 = url.parse(request.url , true).query;
	response.writeHead(200 , "OK");
	response.write(q1);
	response.end();
}).listen(3000);