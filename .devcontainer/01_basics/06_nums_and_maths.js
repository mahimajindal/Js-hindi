const score = 400
 console.log(score);

const balance = new Number(100) //be declaring this way u r saying that u need it to be a 'Number' only.
console.log(balance);

 console.log(balance.toString().length); //converting it to string to use string functions.
console.log(balance.toFixed(2)); //100.00 //priority is given to value after decimal

const otherNumber = 1423.8966 

 console.log(otherNumber.toPrecision(4));//priority is given before decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //1,000,000 bydefault represent it in in US stndard
 console.log(hundreds.toLocaleString('en-IN'));//we can convert it in Indian standard.

// +++++++++++++ Maths +++++++++++++++++++++++++++++
 console.log(Math); //Object [Math] {}  //if we write same line in console wewill get different functions that can be used with math
console.log(Math.abs(-4));//4
 console.log(Math.round(4.6));//5
 console.log(Math.ceil(4.2));//5 because it rounds off to upper value
 console.log(Math.floor(4.9));//4 because it rounds off to lower value
 console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//mostly give values b/w 0 and 1 like 0.25353,0.2666,........
console.log((Math.random()*10) + 1);//suppose we got value like 0.0534, or 0.0987 like this so to avoid it we add 1 and to avoid 0.9887(these type values) we multiply the value by 10 so that we can avoid decimal values
console.log(Math.floor(Math.random()*10) + 1);//floor you can use acc to ur requirement

const min = 10 //here we are saying that wewant valu b/w 10 & 20
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)