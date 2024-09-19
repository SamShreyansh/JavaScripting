let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString())

// typeof date is object

//let myNewDate = new Date(2024, 0, 24)
// let myNewDate = new Date(2024, 0, 24, 13, 6)
let myNewDate = new Date("01-14-2024")
//console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myNewDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);
console.log(newDate.getDate());
//console.log(newDate.weekday()+1);
console.log(newDate.toLocaleString());

console.log(`today date is ${newDate.getDate()} and the month is ${newDate.getMonth()+1}`)

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))

 