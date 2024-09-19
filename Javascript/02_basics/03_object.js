//singleton
//constructor
//object.create
//object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "shrey",
    "full name": "shreyansh",
    [mySym]: "myKey1",
    age: 24,
    location: "mohalo",
    email: "shrey@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sat"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.age = 12
//console.log(JsUser);
//Object.freeze(JsUser)
JsUser.age = 11
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");    
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    // converting string to backtick is know as string interpolation
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


