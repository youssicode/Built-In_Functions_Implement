const myTestArray = [2,4,6]
const myTestArrayObj = [
    {name: "bike", price: 30},
    {name: "car", price: 4000},
    {name: "book", price: 10},
    {name: "car", price: 8000},
]
console.log("======= My test Array:" , myTestArray)

//! === "ForEach" Method === */

//* Built-In function Test
console.log("======= 'ForEach' Built-In function Test")

myTestArray.forEach((el, ndx, arr) => console.log(el * ndx + arr.length)) // 3, 7 , 15


//* Implement Test
console.log("======= 'ForEach' Implement Test")
function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        forEachConditions(arr[i],i,arr)
    }
}
myForEach(myTestArray) // 3, 7 , 15

function forEachConditions(element,index,array) {
    return console.log(element * index + array.length)
 }

//! === "map" higher function === */

//* Built-In function Test
console.log("======= 'map' Built-In function Test")

console.log(myTestArray.map((el,ndx,arr) => el * ndx + arr.length)) // [3, 7, 15]

//* Implement Test
console.log("======= 'map' Implement Test")
function myMap(arr) {
    const newMapArray = []
    for (let i = 0; i < arr.length; i++) {
        newMapArray.push(mapConditions(arr[i],i,arr))
    }
    return newMapArray
}
console.log(myMap(myTestArray))  // [3, 7, 15]      

function mapConditions(element,index,array) {
   return element * index + array.length
}

//! === "filter" higher function === */

//* Built-In function Test
console.log("======= 'filter' Built-In function Test")

console.log(myTestArray.filter((el,ndx,arr) => el < arr.length - ndx)) // [2]


//* Implement Test
console.log("======= 'filter' Implement Test")
function myFilter(arr) {
    const newFilterArray = []
    for (let i = 0; i < arr.length; i++) {
        if (filterConditions(arr[i],i,arr)) newFilterArray.push(arr[i])
    }
    return newFilterArray
}
console.log(myFilter(myTestArray))  // [2]       

function filterConditions(element,index,array) {
   return element < array.length - index
}
//! === "reduce" higher function === */

//* Built-In function Test
console.log("======= 'reduce' Built-In function Test")
let initialValue = 1
const builtInAccumulator = myTestArray.reduce(reduceConditions, initialValue) // With Initial Value
// const builtInAccumulator = myTestArray.reduce(reduceConditions) // Without Initial Value

console.log(builtInAccumulator) // 19

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

console.log(myReduce(myTestArray, initialValue))  // 19      

//! === "some" Array Method === */

//* Built-In function Test
console.log("======= 'some method' Built-In function Test")

let someThisArgument = 4
console.log(
    myTestArray.some(function (el, i, arr) {
        return el == this; // this == someThisArgument
    }, someThisArgument)
) // true

//* Implement Test
console.log("======= 'some method' Implement Test")

function mySome(array, thisArg) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > thisArg) {
            return true
        } 
    }
    return false
} // true

console.log(mySome(myTestArray, someThisArgument))        

//! === "every" Array Method === */

let everyThisArgument = 8
//* Built-In function Test
console.log("======= 'every method' Built-In function Test")

console.log(
    myTestArray.every(function (el, i, arr) {
        return el < this; // this == everyThisArgument
    }, everyThisArgument)
) // true

//* Implement Test
console.log("======= 'every method' Implement Test")

function myEvery(arr, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] < thisArg)) { 
            return false
        } 
    }
    return true
}

console.log(
    myEvery(myTestArray, everyThisArgument) 
)        // true
//! === "find" Array Method === */

//* Built-In function Test
console.log("======= 'find method' Built-In function Test")

console.log(
    myTestArrayObj.find(findConditions) // {name: 'car', price: 4000}
)

//* Common Conditions
function findConditions(el) {
     return el.name == "car" 
}

//* Implement Test
console.log("======= 'find method' Implement Test")

function myFind(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (findConditions(arr[i])) return arr[i]
    }
}

console.log(
    myFind(myTestArrayObj) // {name: 'car', price: 4000}
)        
//! === "flat" Array Method === */
const myTestArrayToFlat = [1, [2, 3], [[]], [4, [5,6,[7]]], 8]
console.log("Original array", myTestArrayToFlat) 

//* Built-In function Test

console.log(".flat()",myTestArrayToFlat.flat())   // [1, 2, 3, [], 4, [5,6,[7]], 8]
console.log(".flat(0)",myTestArrayToFlat.flat(0)) // [1, [2, 3], [[]], [4, [5,6,[7]], 8]
console.log(".flat(1)",myTestArrayToFlat.flat(1)) // [1, 2, 3, [], 4, [5,6,[7]], 8]
console.log(".flat(2)",myTestArrayToFlat.flat(2)) // [1, 2, 3, 4, 5, 6, [7], 8]
console.log(".flat(3)",myTestArrayToFlat.flat(3)) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(".flat(Infinity)",myTestArrayToFlat.flat(Infinity)) // [1, 2, 3, 4, 5, 6]

//* Implement Test

console.log("################ 'flat(withArgument:nbr Or Infinity) method' Implement, Global Function Test ##############")

function myFlat(arr,arg = 1) { // arg = 1 if no argument passed
    const flatedArray = new Array // Or = []
    flatArray(arr, arg)
    function flatArray(tabl, depth) {
        for (const currentEl of tabl) {
            if (Array.isArray(currentEl) && depth) { // depth != 0
                flatArray(currentEl, depth - 1)
                continue // Skip the next instructions
            } 
            flatedArray.push(currentEl)
        }
    }
    return flatedArray
}

console.log("implementFlat()",myFlat(myTestArrayToFlat)) // [1, 2, 3, [], 4, [5,6,[7]], 8]
console.log("implementFlat(0)",myFlat(myTestArrayToFlat,0)) // [1, [2, 3], [[]], [4, [5,6,[7]], 8]
console.log("implementFlat(1)",myFlat(myTestArrayToFlat,1)) // [1, 2, 3, [], 4, [5,6,[7]], 8]
console.log("implementFlat(2)",myFlat(myTestArrayToFlat,2)) // [1, 2, 3, 4, 5, 6, [7], 8]
console.log("implementFlat(3)",myFlat(myTestArrayToFlat,3)) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log("implementFlat(Infinity)",myFlat(myTestArrayToFlat, Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8]



// console.log("======= 'flat() method' Implement Test (Without Argument)")
// function myFlat(arr) {
//     let flatedArray = new Array
//     while (arr.length) {
//         let currentEl = arr.shift()
//         if (Array.isArray(currentEl)) {
//             for (let j = 0; j < currentEl.length; j++) {
//                     flatedArray.push(currentEl[j])
//             } 
//             continue
//         } 
//         flatedArray.push(currentEl)
//     }
//     return flatedArray
// }
    //========== method 2: with For Loop =======
// function myFlat(arr) {
//     let flatedArray = new Array
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             flatedArray.push(arr[i][j])
    //         } 
    //         continue
    //     } 
    //     flatedArray.push(arr[i])
    // }
    // return flatedArray
// }


// console.log("======= 'flat(Infinity) method' Implement Test")
// function myFlat(arr) {
//     let flatedArray = new Array
//     flatArray(arr)
//     return flatedArray

//     function flatArray(arr) {
//         while (arr.length) {
//             let currentEl = arr.shift()
//             if (Array.isArray(currentEl)) {
//                 flatArray(currentEl)
//                 continue // Skip the next instructions
//             } 
//             flatedArray.push(currentEl)
//         }
//     }
// }