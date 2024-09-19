// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id===anotherId);

const bigNumber = 134235345346n
//console.log(typeof bigNumber);



//// reference (non-primitive)

// array, objects, functions

const hero = ["superman", "batman", "iron man"]
let myObj={
    name : "shrey",
    age: 22,
}

const myFunction = function () {
    console.log("shrey sam");
        
}

console.log(myFunction);
