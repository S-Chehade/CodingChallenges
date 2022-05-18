//Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// create a function that takes in a boolean

function booleanToString(b){
    if (b === true){
        return 'true'
    }else{
        return 'false'
    }
}

// dont have to have b == true, can just use if (b) bc its truthy

function booleanToString(b){
    if (b){
        return 'true'
    }else{
        return 'false'
    }
}

// instead of a full conditional, a ternery
// ternery says if b is true (truthy), return 'true', otherwise return 'false'

function booleanToString(b){
    return b ? 'true' : 'false'
}

// can use the .toString() method

function booleanToString(b){
    return b.toString()
}

// there is also a String() constructor that can be used

function booleanToString(b){
    return String(b) 
}

// pass the boolean into a template literal

function booleanToString(b){
    return `${b}`
}

