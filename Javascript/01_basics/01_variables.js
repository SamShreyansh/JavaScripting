const accountId = 144553
let accountEmail = "shrey@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "sam@gmail.com"
accountPassword = "2121212"
accountCity = "delhi"
let accountState

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])