/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// 1. create function that takes in 2 integers, a & b
// 2. select integers from a - b
        // for loop to loop from a to b?
        // 
// 3. put those numbers in an array and return the array 
        // methods: push can add i to the end of the array

function between(a, b) {
    let arr = []
    for (i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
  }