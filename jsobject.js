/*Display Object Properties*/

/*1: The properties of an object can be displayed as a string:*/
var person = { name: "Linda", age: 36, country: "Nepal" };
document.getElementById("first").innerHTML = person.name + " " + person.age + " " + person.country;

/*2: The properties of an object can be collected in a loop:*/
var x, txt = "";
var person = { name: "Andrea", age: 32, region: "Sicily" };
for (x in person) {
    txt += person[x] + " ";
};
document.getElementById("second").innerHTML = txt;

/*3: Any JavaScript object can be converted to an array using Object.values():*/
var person = { name: "Martina", age: 38, city: "Rome" };
var myArray = Object.values(person);
document.getElementById("third").innerHTML = myArray;

/*4: Any JavaScript object can be stringified with the JavaScript function JSON.stringify():*/
var person = { name: "Linda", surname: "Scarano", job: "Frontend Developer" };
var myString = JSON.stringify(person);
document.getElementById("fourth").innerHTML = myString;

/*5: It is possible to stringify JavaScript arrays with the JavaScript function JSON.stringify():*/
var arr = ["Linda", "Martina", "Andrea"];
var myStr = JSON.stringify(arr);
document.getElementById("fifth").innerHTML = myStr;

/*6: JSON.stringify will not stringify functions. 
This can be "fixed" if you convert the functions into strings before stringifying.*/
var person = { name: "Linda", age: function () { return 36; } };
person.age = person.age.toString();
var mystr = JSON.stringify(person);
document.getElementById("sixth").innerHTML = mystr;



