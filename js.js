const myTestArray = [1,2,3]

//! === "ForEach" Method === */

//* Built-In function Test
console.log("======= 'ForEach' Built-In function Test")

myTestArray.forEach((el, ndx, arr) => console.log(el * ndx + arr.length))


//* Implement Test
console.log("======= 'ForEach' Implement Test")
function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        forEachInstructions(arr[i],i,arr)
    }
}
myForEach(myTestArray)

function forEachInstructions(element,index,array) {
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
        newMapArray.push(mapInstructions(arr[i],i,arr))
    }
    return newMapArray
}
console.log(myMap(myTestArray))        

function mapInstructions(element,index,array) {
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
        if (filterInstructions(arr[i],i,arr)) newFilterArray.push(arr[i])
    }
    return newFilterArray
}
console.log(myFilter(myTestArray))        

function filterInstructions(element,index,array) {
   return element < array.length - index
}