const marvel = ["thor", "iron man", "hulk"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)
// console.log((marvel));
// console.log(marvel [3][2])

// const allHeros = marvel.concat(dc)
// console.log(allHeros)

const all = [...marvel, ...dc] // ... is a spread operator, it spread all the elements in an array
//console.log(all);

const another= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = another.flat(Infinity) // open all array and form one array and infinity means it open all sub array
//console.log(real)


console.log(Array.isArray("sam"))
const a = (Array.from("sam"))
console.log(a)
console.log(Array.isArray(a))
console.log(Array.from({name: "sam"})) // empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

