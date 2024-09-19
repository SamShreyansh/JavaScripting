const myArr = [0,1,2,3,4,5]
const myHero = ["a","b","c","d"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[3])
// console.log(myArr2[1])

//array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr)

// myArr.push(7)
// console.log(myArr);

//myArr.unshift(9) // it add the value starting of the array
//myArr.shift() // it remove the first element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)

console.log(myn2)

