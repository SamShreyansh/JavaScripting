//const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regular = {
    email: "sam@.com",
    fullname: {
        userFullName: {
            firstname: "shrey",
            lastname: "sam"
        }
    }
}

//console.log(regular.fullname.userFullName.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const  obj3 = { ...obj1, ...obj2 } //spread operator

const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);


const users = [
    {
        id: 1,
        email:  "sam@.com",
    },
    {
        id: 2,
        email:  "sama@.com",
    },
    {
        id: 3,
        email:  "samad@.com",
    },
]

//console.log(users[1].email);
//console.log((tinderUser));

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));




