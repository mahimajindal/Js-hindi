/*let score = undefined

console.log(typeof score)
let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)*/

//if value of score is "33" => we get o/p=33 only after converting in number
// if value of score is "33abc" => we get o/p=NaN and converted type is still number
// if score value is null =>type of null= object, o/p = 0, convertedType=number
//if score is undefined =>type of score=undefined, o/p=NaN, same
//if score is true => o/p=1
//if score is "hitesh" => o/p is NaN

//-----------------------------------converting to boolean--------------------//
/*let isLoggedIn ="mahi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)*/
//1 => o/p is true
//""=> false
//"mahi"=> true

//----------------------------converting  to String--------------------------//
/*let someNumber = 44
let stringNumber = String(someNumber)
console.log(stringNumber)*/

//44 => 44

//-----------------------------OPERATIONS-----------------------------------//
console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2%2)
console.log(2**5)// power
//------etc...

console.log("1"+ 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //o/p is 122
console.log(1 + 2 + "2") //o/p is 32
//console.log(3+4*5%4)

console.log(+true)//not gud to write like this code
console.log(+"")//not gud

let gamecounter=100
gamecounter++; //++gamecounter; both gives same //do read prefix postfix from js mdn
console.log(gamecounter)


