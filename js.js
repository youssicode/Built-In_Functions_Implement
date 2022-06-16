const myTestArray = [2,4,6]
console.log("======= My test Array:" , myTestArray)

//! === "ForEach" Method === */

//* Built-In function Test
console.log("======= 'ForEach' Built-In function Test")

myTestArray.forEach((el, ndx, arr) => console.log(el * ndx + arr.length))


//* Implement Test
console.log("======= 'ForEach' Implement Test")
function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        forEachConditions(arr[i],i,arr)
    }
}
myForEach(myTestArray)

function forEachConditions(element,index,array) {
    return console.log(element * index + array.length)
 }

//! === "map" higher function === */

//* Built-In function Test
console.log("======= 'map' Built-In function Test")

console.log(myTestArray.map((el,ndx,arr) => el * ndx + arr.length))

//* Implement Test
console.log("======= 'map' Implement Test")
function myMap(arr) {
    const newMapArray = []
    for (let i = 0; i < arr.length; i++) {
        newMapArray.push(mapConditions(arr[i],i,arr))
    }
    return newMapArray
}
console.log(myMap(myTestArray))        

function mapConditions(element,index,array) {
   return element * index + array.length
}

//! === "filter" higher function === */

//* Built-In function Test
console.log("======= 'filter' Built-In function Test")

console.log(myTestArray.filter((el,ndx,arr) => el < arr.length - ndx))


//* Implement Test
console.log("======= 'filter' Implement Test")
function myFilter(arr) {
    const newFilterArray = []
    for (let i = 0; i < arr.length; i++) {
        if (filterConditions(arr[i],i,arr)) newFilterArray.push(arr[i])
    }
    return newFilterArray
}
console.log(myFilter(myTestArray))        

function filterConditions(element,index,array) {
   return element < array.length - index
}
//! === "reduce" higher function === */

//* Built-In function Test
console.log("======= 'reduce' Built-In function Test")
let initialValue = 1
const builtInAccumulator = myTestArray.reduce(reduceConditions, initialValue) // With Initial Value
// const builtInAccumulator = myTestArray.reduce(reduceConditions) // Without Initial Value

console.log(builtInAccumulator)

//* Common Conditions
function reduceConditions(accumulator,currentelement,index,array) {
    return (accumulator + currentelement) - index + array.length
}
//* Implement Test
console.log("======= 'reduce' Implement Test")
function myReduce(arry, init) {
    let start
    // if (init != NaN) {
    //     impAccumulator = init
    //     start = 0
    // }
    // if (init == undefined) {
    //     impAccumulator = arry[0]
    //     start = 1
    // }
    init == undefined? (impAccumulator = arry[0], start = 1) : (impAccumulator = init, start = 0)
    for (let i = start; i < arry.length; i++) {  
        impAccumulator = reduceConditions(impAccumulator,arry[i],i,arry)
    }
    return impAccumulator
}

console.log(myReduce(myTestArray, initialValue))        

//! === "some" Array Method === */

//* Built-In function Test
console.log("======= 'some method' Built-In function Test")

let thisArgument = 4
console.log(
    myTestArray.some(function (el, i, arr) {
        return el == this; // this == thisArgument
    }, thisArgument)
)

//* Implement Test
console.log("======= 'some method' Implement Test")

function mySome(array, thisArg) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == thisArg) {
            return true
        } 
    }
    return false
}

console.log(mySome(myTestArray, thisArgument))        