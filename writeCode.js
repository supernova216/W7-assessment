//1.
function addToZero(arr){
return arr.reduce((a, b) => a + b, 0) === 0 
}
console.log(addToZero([0,0]))

//Time complexity is o(n) because I have to go over the entire length of the array, which could be any length,
//to determine whether the array sums to zero.

//Space complexity is o(1) because only one boolean is being stored, while the input parameter is outside
//the function, so it doesn't increase space complexity


//2.
function hasUniqueChars(str){
let uniques = []
for (let i = 0; i < str.length; i++) {
    if (uniques.includes(str[i])){
        return false
    } else {
        uniques.push(str[i])
    }
} return true
}
console.log(hasUniqueChars('Momday'))

//Time complexity is o(n) because I have to iterate over the length of the string

//Space complexity is o(n) because the uniques array takes up a variable amount of space


//3.
function isPangram(str) {
    str = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        }
    } return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//Time complexity is o(n) because, while alphabet may be a fixed length array, str is a variable length
//string that I have to compare with alphabet to see if it contains a character than alphabet has.
//if str had one million characters and only had a z on the last character, it would take longer than if str
//only had 10 characters

//Space complexity is o(1) because str still takes up the same amount of space as when it was a parameter and
//alphabet is a fixed length array


//4.
function findLongestWord(arr){
    let longest = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length>longest){
            longest = arr[i].length
        }
    } return longest
}

console.log(findLongestWord(["hi", "hello"]))

//Time complexity is o(n) because the amount of time the function takes depends on the length of the arr param

//Space complexity is 0(1) because longest occupies a fixed amount of space and arr is a parameter.