const accountId = 14252;
let accountEmail = "mahijr@gmail.com"
var accountPassword = "12345"  
accountCity = "Delhi"

/*Earlier there were only 2 (const and var) but there was scope problem with 
var i.e if we change var value then it will be changed in all places of var so
"let" was introduced to be used instead of "var".  #Use let 
*/

let accountState ;   //it is called undefined in js

//accountId = 32  //not allowed to change const
accountEmail = "mahimarce@gmail.com"
accountPassword = "1466"
accountCity = "Chennai"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

