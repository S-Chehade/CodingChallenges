/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/ 

/* 
1. Create function that takes in a num
2. Change the num to a negative num
3. if zero - just return zero
*/

function makeNegative(num){
    if (num > 0){
        return -(num);
    }else{
        return num;
    }
}

// ternery instead

function makeNegative(num){
    return num > 0 ? -num : num;
}

// listed as best practice: Math.abs will return absolute value of the num

function makeNegative(num){
    return -Math.abs(num);  // does this work with zero? ... this returns -0 
}