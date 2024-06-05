//On the basis of how Data is stored in memory and how it is accessed,there are 2 types of Data -> Primitive and Non-Primitive.

/*PRIMITIVE = These are Call by value which means whnever we copy them or call them so we get their copies and not their reference so we made changes in their copies.
=>String, Number, Boolean, null, undefined, Symbol,BigInt.*/

/*NON-PRIMITIVE(or REFERENCE TYPES)= we get their reference in memory.
=> Array, Objects, Functions*/

/*Ques : is JavaScript a dynamically types language or static..?
Ans => It is dynamic language because we dont usually define datatypes while declaring variables , we just use "Var" and "Const". */

const score = 100
const isloggedIn = false
const outsideTemp= null
let userEmail;
const bigNumber = 25327477474838288829191919919100n  //use "n" to indicate it is a bigInt.
const id =Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId) //whether u write same number inside symbol datatype but it always give different ids

const Heros = ["spiderman", "Doga", "Nagraj"]

let myObj={
    name:"mahi",
    age:22
}

const myFunc = function(){
    console.log("hello")
}

console.log(typeof score) //number
console.log(typeof id)    //sybmol
console.log(typeof anotherId)  //symbol
console.log(typeof Heros )    //object
console.log(typeof myObj)     //object
console.log(typeof myFunc)   //function(In output it says function but in documentation if we read it says "Function Object")

//In javascript every non-primitive datatype gives its returnType as an "Object" always except function which gives "function-object".

//============================MEMORY===========================//

//Stack(Primitive) , Heap(Non-Primitive)

let userOne= {
    email:"mahirj@gail.com",
    upi: "user@ybl"
}

let userTwo= userOne
userTwo.email = "rke@gail.com" //changing value of userTwo will change value of userOne also bcz we get reference here in heap.

console.log(userOne.email);
console.log(userTwo.email);







