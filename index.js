var name = "ViktOR";
// console.log(name.toLowerCase());
// var nameUpdated = name.toLowerCase();

// if(nameUpdated=="viktor")
// {
// 	console.log("Hello " + name);
// }
// else
// 	console.log("You are not " + name);


// switch(name)
// {
// 	case "Viktor":
// 	console.log("Hello " + name);
// 	break;
// 	case "viktor":
// 	console.log("Hello " + name);
// 	break;
// 	default:
// 	console.log("You are not " + name);
// }

// var firstName = "Viktor ";
// var lastName = "Tasevski";
// var fullName = firstName.concat(lastName);
// console.log(fullName);

// var boolean = true;

// var integer = [3,4,5,6,7,8,9,10,12];

// integer[100] = 50;
// console.log(integer);

// for(var i=0;i<integer.length;i++)
// {	
// 	if(integer[i]%3==0 && integer[i]%4==0)
// 		console.log("buzz fiz");
// 	else if(integer[i]%3==0)
// 		console.log("buzz");
// 	else if(integer[i]%4==0)
// 		console.log("fiz");
// 	else
// 		console.log("");
// }



// var name = ["viktor","david","koce"];

// var pass = ["123","456","789"];

// var myName = "viktor";

// var myPass = "12	";

// var res = false;

// for(let i=0;i<name.length;i++)
// {
// 	if(name[i]==myName && pass[i]==myPass)
// 		res = true;
// 		// console.log("Logged in!");
// }

// if(res)
// 	console.log("Logged in!");
// else
// 	console.log("Failed to log in!");



// var broevi = [1,2,3,4,5,6,7,8,9,10];

// var parni= [];

// var neparni = [];

// for(let i=0;i<broevi.length;i++)
// {
// 	if(broevi[i]%2==0)
// 		parni.push(broevi[i]);
// 	else
// 		neparni.push(broevi[i]);
// }

// console.log(parni);
// console.log(neparni);


// var i = 5;

// var name = "Viktor";

// console.log(isNaN(i));

// console.log(isNaN(name));

// var niza = [1,"test",2,"Denes e 27 juli","5"];

// for(let i=0;i<niza.length;i++)
// {
// 	if(!isNaN(niza[i]))
// 		console.log(niza[i]);

// }

//  var x=function ()  //anonimusna funkcija
// {
// 	console.log("Hellow from anonymous function");
// }
// console.log(x);


// var a = 5, b = 10;
// (function(a,b) //self-invoked
// {	
// 	console.log(a+b);
// 	console.log("Hellow from self-invoked function");

// }(a,b))

// var niza = ["we",5,6,"learn",4,"JavaScript"];
// var finalstring ='';
// for(let i=0;i<niza.length;i++)
// {
// 	if(isNaN(niza[i]))	
// 		// finalstring=finalstring.concat(niza[i] + " ");
// 		finalstring+=niza[i] + " ";
		
// 		else{	
// 		let zbir = soberisledbenik(niza[i]);
// 		console.log(zbir);
// 		}
// }

// function soberisledbenik(broj)
// {	
// 	let sledbenik = broj + 1;
// 	return broj + sledbenik;
// }

// console.log(finalstring);

// var person = 
// {
// 	firstName: "Viktor",
// 	lastName: "Tasevski",
// 	age: 17,
// 	sex: "Male",

// 	getFullName: function()
// 	{
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// console.log(person.getFullName());


// var kuce = {
// 	breed: "Pudlica",
// 	firstName: "Fifi",
// 	lastName: "Nema, kuce e.",
// 	age: 9,

// 	getFirstName_and_age: function()
// 	{
// 		return "I'm " + this.firstName + " and I'm " + this.age + " years old.";
// 	}
// }

// console.log(kuce.getFirstName_and_age());


// var niza = [];

// niza.push(kuce);
// niza.push(person);

// for(let i=0;i<niza.length;i++)
// {
// 	console.log(niza[i].firstName);
// }

// for(let i=0;i<niza.length;i++)
// {
// 	if(niza[i].age>=18)
// 		console.log(niza[i].getFirstName_and_age());
// }




// var house = {
// 	m2: "50",
// 	price_m2: "1000",
// 	balcony: "5",

// 	getFullPrice: function()
// 	{
// 		return (parseInt(this.m2)+parseInt(this.balcony))*this.price_m2;
// 	}
// }

// console.log(house.getFullPrice());



/*var property = {
	type:
	m2: "50",
	price_m2: "1000",
	balcony: "5",

	getFullPrice: function()
	{
		return (parseInt(this.m2)+parseInt(this.balcony))*this.price_m2;
	}
povekje objekti pod 60m2 i cena pod 1000evra so klaca(konstruktor)
}*/

class Property
{
	constructor(type,m2,price_m2,balcony)
	{		
		this.type = type;
		this.m2 = m2;
		this.price_m2 = price_m2;
		this.balcony = balcony;
	}
	pecatenje()
	{
	console.log("Type: " + this.type + "\n" + "Metre sqares: " + this.m2 + "\n" + "Price per m2 : " + this.price_m2 + "\n" + "Balcony: " + this.balcony);
	}
}

var building_1 = new Property("House" , "50" , "850" , "15");

var building_2 = new Property("Villa" , "350" , "1600" , "30");

var building_3 = new Property("Cottage" , "40" , "900" , "none");

var building_4 = new Property("Building" , "600" , "700" , "10");

var niza = [building_1,building_2,building_3,building_4];

for(let i = 0; i < niza.length;i++)
{
	if(niza[i].m2 < 60 && niza[i].price_m2 < 1000)
	{
		niza[i].pecatenje();
		console.log("\n");
	}
}

