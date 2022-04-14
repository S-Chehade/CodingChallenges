/* Create a function that takes in an array and removes every other element starting with the 
second element*/

let arr = ['A','B','C','D','E','F','G']

function removeEveryOther(arr){                      //function that takes in the array
    return arr.filter(function(element, index){      // return the filtered array if the function evaluates to true
        return index % 2 === 0                       // the function takes in (element, index, array) and if the index  
    })                                               // number is even, it returns it in the filtered array
}

