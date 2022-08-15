//! === "ForEach" Method === */

function myForEach(arr, conditionsFun) {
    for (let i = 0; i < arr.length; i++) {
        conditionsFun (arr[i], i, arr)
    }
}

//! === "map" higher function === */

function myMap(arr, conditionsFun) {
    const newMapArray = []
    for (let i = 0; i < arr.length; i++) {
        newMapArray.push(conditionsFun(arr[i],i,arr))
    }
    return newMapArray
}

//! === "filter" higher function === */

function myFilter(arr, conditionsFun) {
    const newFilterArray = []
    for (let i = 0; i < arr.length; i++) {
        if (conditionsFun(arr[i],i,arr)) newFilterArray.push(arr[i])
    }
    return newFilterArray
}

//! === "reduce" higher function === */

function myReduce(arry, cbConditionF, init) {
    init == undefined? (impAccumulator = arry[0], start = 1) : (impAccumulator = init, start = 0)
    for (let i = start; i < arry.length; i++) {  
        impAccumulator = cbConditionF(impAccumulator,arry[i],i,arry)
    }
    return impAccumulator
}

//! === "some" Array Method === */
   
    function mySome(arr, Argmnt, cbConditionF) {
        for (let index = 0; index < arr.length; index++) {
            if (cbConditionF(arr[index], Argmnt)) return true
        }
        return false
    }


//! === "every" Array Method === */

function myEvery(arr, Argmnt) {
    for (let index = 0; index < arr.length; index++) {
        if (!(arr[index] >= Argmnt)) return false
    }
    return true
}
  
//! === "find" Array Method === */
// To rewrite =========================================================================
// function Find (array, cb) {
//     //* Implement function Test
//         function myFind(arr) {
//             for (let i = 0; i < arr.length; i++) {
//                 if (cb(arr[i])) return arr[i]
//             }
//         }
//         console.log('= "find method" Implement Test',
//             myFind(array) 
//         )        
// }
// Find(myTestArrayObj, findCb) // {name: 'car', price: 4000}

// function findCb(el) {
//     return el.name == "car" 
// }

//!======= "flat" Array Method ======

function myFlatArray(array,dp) {
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
}
// 2nd Method for 'flat(Infinity) method
let flatedArray2 = []
function myFlatArray2(arr) {
    while (arr.length) {
        let currentEl = arr.shift() // Extract and delete the first element from the array
        if (Array.isArray(currentEl)) {
            myFlatArray2(currentEl)
        } else {
            flatedArray2.push(currentEl)
        }
    }
    return flatedArray2
}

//!======== "fill" Array Method ========

function myFill_method (val, str, nd) {
        const implFillArray = [1, 2, 3, 4, 5, 6, 7, 8]
        (function myFill(array, value, start = 0, end = array.length) {
            for (let i = start; i < end; i++) {
                array[i] = value
            }
            return array       
        })(implFillArray, val, str, nd) // (the hole function)(arguments) ~ function(arguments) => Calling the function
}


module.exports = [myForEach, myMap, myFilter, myReduce, mySome] // we can use {} instead of [] but the 'import' variable should be then the same as the exported module's names (object distructuring)
// myForEach, myEvery, myFill_method, myFilter, myFlatArray, myMap, myReduce, mySome