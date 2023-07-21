// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let smallNum = null
let bigNum = null


// Write your solution below:
for(let i = 0; i< array.length; i++) {
    if(smallNum > array[i]) {
        smallNum = array[i]
    } else if(bigNum < array[i]) {
        bigNum = array[i]
    }
}

console.log(smallNum, bigNum)