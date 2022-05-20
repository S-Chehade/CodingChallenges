/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

// 1. create function that takes in string
// 2. make string array and evaluate each character in the string -- > split ('') and filter()
// 3. if the character is a number, then remove that number --> isNaN() function? 
// 4. join array back to string
// 5. return the amended string


function stringClean(s){
    let sSplit = s.split('');
    let filteredArr = sSplit.filter(element => NaN(element) || (element == ' '));
    return filteredArr.join('');
}

