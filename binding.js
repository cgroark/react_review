//Implicit Binding - with the 'this' keyword
//essential to understand WHERE the function was invoked
//Implicit binding- left of the dot at call time

var me = {
	name: 'tyler',
	age: 33,
	sayName: function(){
		console.log(this.name);
	}
};

me.sayName()
//implicit binding says that when function is invoked that includes 'this' (like sayName() above), 'this, 
//will reference what is to the left of the dot. In the case above it refernce the 'me' object

//explicit binding

//using .call() to explicitly say what we're passing as the 'this' keyword
var sayName = function(lang1, lang2, lang3){
	console.log('my name is ' + name + 'and I know ' + lang1 + ', ' + lang2 + ', ' + lang3 + '.')
}

var stacey = {
	name: 'Stacey',
	age: 45
}
var language = ['javascript', 'html', 'css']

sayName.call(stacey, language[0], language[1], language[2]);
//with .call(), the first agument is the context (what 'this' will be) and addtional arguments can be passed just as arguments

//using .apply() to explicitly say what we're passing as 'this' AND pass an array
var sayName = function(lang1, lang2, lang3){
	console.log('my name is ' + name + 'and I know ' + lang1 + ', ' + lang2 + ', ' + lang3 + '.')
}

var stacey = {
	name: 'Stacey',
	age: 45
}
var language = ['javascript', 'html', 'css']

sayName.apply(stacey, language);
//with .apply(), the first agument is the context (what 'this' will be) and addtional agrument can be an array

//.bind() will explicitly say what 'this' is an return a new function

var sayName = function(lang1, lang2, lang3){
	console.log('my name is ' + name + 'and I know ' + lang1 + ', ' + lang2 + ', ' + lang3 + '.')
}

var stacey = {
	name: 'Stacey',
	age: 45
}
var language = ['javascript', 'html', 'css']

var newFunction = sayName.bind(stacey, language[0], language[1], language[2]);
//with .bindl(), the first agument is the context (what 'this' will be) and addtional arguments 
//can be passed just as arguments, but .bind() will return a function, it won't invoke it

newFunction();

//new binding

var Animal = function(color, name, type){
	this.color = color,
	this.name = name,
	this.type = type
}

var zebra = new Anmial('black and white', 'leopardZ', 'zebra');
//when you invoke a function (^^ Animal) with the 'new' keyword, the 'this' keyword inside that function is bound 
//to the object being contructed (it'll create an object in the function behind the scenes that's like this = {})

//window binding

var sayAge = function(){
	console.log(this.age)
}

var me = {
	age: 25
}

sayAge() //this will return as undefined becauses it's not accessing the 'me' object. ''
//'this' defualts to the window object (unless in strict mode in which case you get an error)

window.age = 35 //this will allow you to call the age 




