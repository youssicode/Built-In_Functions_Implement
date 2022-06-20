const myTestArray = [2,4,6]
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

// console.log(myTestArray.filter((el,ndx,arr) => el < arr.length - ndx)) // [2]
console.log(myTestArray.filter((el,ndx,arr) =>  filterConditions(el,ndx,arr))) // [2]


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
   return element <= array.length + index
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
    init == null? (impAccumulator = arry[0], start = 1) : (impAccumulator = init, start = 0)
    for (let i = start; i < arry.length; i++) {  
        impAccumulator = reduceConditions(impAccumulator,arry[i],i,arry)
    }
    // OR:
    // let impAccumulator = init
    // for (let i = 0; i < arry.length; i++) {  
    //     if (init == null && i === 0) {
    //         impAccumulator = arry[0]
    //     } else {
    //         impAccumulator = reduceConditions(impAccumulator,arry[i],i,arry)
    //     }
    // }
    return impAccumulator
}

console.log(myReduce(myTestArray, initialValue))  // 19      

//! === "some" Array Method === */

function Some(array, thisArgmnt) { 
    
    //* Built-In function Test
        console.log("='some method'= Built-In function Test", 
        array.some(function (el, i, arr) {
            return someCb(el, this) // this == thisArgmnt
        }, thisArgmnt)
        ) 
    
    //* Implement Test
        function mySome(arr, Argmnt) {
            for (let index = 0; index < arr.length; index++) {
                if (someCb(arr[index], Argmnt)) return true
            }
            return false
        }
        console.log("='some method' Implement Test", mySome(array, thisArgmnt))

    //* Common Conditions
        function someCb(element, Arg) {
            return element > Arg
        }
}    
Some(myTestArray, 8) // false    


//! === "every" Array Method === */

function Every(array, thisArgmnt) { 
    
    //* Built-In function Test
        console.log("='every method'= Built-In function Test", 
        array.every(function (el, i, arr) {
            return everyCb(el, this) // this == thisArgmnt
        }, thisArgmnt)) 
    
    //* Implement Test
        function myEvery(arr, Argmnt) {
            for (let index = 0; index < arr.length; index++) {
                if (!everyCb(arr[index], Argmnt)) return false
            }
            return true
        }
        console.log("='every method' Implement Test", 
        myEvery(array, thisArgmnt))

    //* Common Conditions
        function everyCb(element, Arg) {
            return element >= Arg
        }
}    
Every(myTestArray, 2) // true 

//! === "find" Array Method === */
const myTestArrayObj = [
    {name: "bike", price: 30},
    {name: "car", price: 4000},
    {name: "book", price: 10},
    {name: "car", price: 8000},
]

function Find (array, cb) {
    
    //* Built-In function Test
        console.log('= "find method" Built-In Test',
        array.find(cb) 
        )

    //* Implement function Test
        function myFind(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (cb(arr[i])) return arr[i]
            }
        }
        console.log('= "find method" Implement Test',
            myFind(array) 
        )        
}
Find(myTestArrayObj, findCb) // {name: 'car', price: 4000}

function findCb(el) {
    return el.name == "car" 
}

console.log('//!########### "flat" Array Method #########')

const myTestArrayToFlat = [1, [2, 3], [[]], [4, [5,6,[7]]], 8]

function Flat(array,dp) {
    //* Built-In function Test
    console.log('flat() Built-In Test', array.flat(dp)) 
    
    //* Implement Test
    const flatedArray = new Array // Or = []
    function myFlat(tabl, depth = 1) { // depth = 1 if no argument passed
            for (const currentEl of tabl) {
                if (Array.isArray(currentEl) && depth) { // depth != 0
                    myFlat(currentEl, depth - 1)
                    continue // Skip the next instructions
                } 
                flatedArray.push(currentEl)
            }
        return flatedArray
    }
    console.log('flat() Implement Test', myFlat(array, dp))
}
Flat(myTestArrayToFlat) // [1, 2, 3, [], 4, [5, 6, [7]], 8]
Flat(myTestArrayToFlat, 1) // [1, 2, 3, [], 4, [5, 6, [7]], 8]
Flat(myTestArrayToFlat, 2) // [1, 2, 3, 4, 5, 6, [7], 8]
Flat(myTestArrayToFlat, 3) // [1, 2, 3, 4, 5, 6, 7, 8]
Flat(myTestArrayToFlat, Infinity) // [1, 2, 3, 4, 5, 6, 7, 8]

//! 2nd Method for 'flat(Infinity) method
let flatedArray2 = []
function flatArray(arr) {
    while (arr.length) {
        let currentEl = arr.shift() // Extract and delete the first element from the array
        if (Array.isArray(currentEl)) {
            flatArray(currentEl)
        } else {
            flatedArray2.push(currentEl)
        }
    }
    return flatedArray2
}
console.log("===2nd Method for 'flat(Infinity) method' Implement Test",
flatArray(myTestArrayToFlat))


console.log('//!########### "fill" Array Method #########')

function fill_method (val, str, nd) {
    // * Built-In function Test
        const builtInFillArray = [1, 2, 3, 4, 5, 6, 7, 8]
        console.log('fill() Built-In function Test',
            builtInFillArray.fill(val, str, nd) 
        )   
    
    //* Implement Test
        const implFillArray = [1, 2, 3, 4, 5, 6, 7, 8]
        console.log('fill method Implement Test', 
            (function myFill(array, value, start = 0, end = array.length) {
                for (let i = start; i < end; i++) {
                    array[i] = value
                }
                return array       
            })(implFillArray, val, str, nd) // (the hole function)(arguments) ~ function(arguments) => Calling the function
        )
}
fill_method("val", 3, 5) // [1, 2, 3, 'val', 'val', 6, 7, 8]
// fill_method("val", 5) // [1, 2, 3, 4, 5, 'val', 'val', 'val']
// fill_method("val") // ['val', 'val', 'val', 'val', 'val', 'val', 'val', 'val']

