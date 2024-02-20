// Maps and Sets Exercise

// Quick Question #1
// What does the following code return?
/new Set([1,1,2,2,3,4])

([1,2,3,4]) //this is what is returned when making a set with duplicate values


// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("")

'ref' //this is return

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Key: [1,2,3]   Value: true   
// Key: [1,2,3]   Value: false  //arrays are not the same even when they include the same values



// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length



// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// const vowel

function vowelCount(str) {
    const vowelMap = new Map();
    
    for (let char of str.toLowerCase()) {
      if ("aeiou".includes(char)) {
        vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
      }
    }
  
    return vowelMap;
  }
  