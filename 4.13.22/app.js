/* Given an array of integers, 
return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x){
    map1 = x.map(x => x * 2)
    return map1
}

/* P: Is it always going to be integers? Are we going
to be given any special characters? An empty arr ever?
*/ 
// R: Return a new arr with each value doubled
// E: IF we are given [2,3,4] should return [4,6,8]
//    If we are given [4,5,6] should return [8,10,12]
//    If we are given [2,22] should return [4,44]

// P: 
// Make a function that takes in an array
function doubledArr(arr){
   return arr.map(element=>element*2)    // e is arbitray, you could use dog=>dog*2 and it would be the same
}                           // could also do e*=2


//if we used a funciton declaration instead of arrow function:
function doubledArr(arr){
    return arr.map(function noArrow(element){
        return element*2
    })
}
// map through the array and multiply each value by 2

// how to build test cases (several ways):
doubledArr([1,2,3])

//Or can console.log it - can add in what the answer should be on the right
console.log(doubledArr([2,3,4]), [4,6,8])


// what if you have an empty arr?
function doubledArr(arr){
    if(arr.length === 0 || arr === undefined){
        console.log('Array is invalid')
    }else{
        return arr.map(element=>element*2)
    }
}

console.log(doubledArr([2,3,4]), [4,6,8])
console.log(doubledArr([]))

