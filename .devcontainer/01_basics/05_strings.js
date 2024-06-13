const name = "Mahima"
const repoCount = 50

// console.log(name + repoCount + " Value"); //in these modern days we dont use this syntax to concatenate.

console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);//It is called STRING INTERPOLATION //this name is scratched bcz it gives some features of TypeScript sometimes.

const gameName = new String('hitesh-hc-com') //This is also a way to declare a string value and if we do this same in console and see gameName so weget some key value pairs which shows its an object and also get prototype which has various functions that can be used along with this string.

let gameName2 = new String('   mahiraji   ')
let gameName3 = gameName2
console.log(typeof gameName2)
const chars = gameName3.split('');
console.log(chars[4]);
console.log(gameName3.trim())
console.log(gameName2)
console.log(gameName3);

console.log(gameName3.replace('ra', 'ma'))
 console.log(gameName[0]);
 console.log(gameName.__proto__)//By this we can get prototpe here in node also.
 console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));