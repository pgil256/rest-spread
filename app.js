// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// function filterOutOdds() {
//     var nums = Array.prototype.slicecall(...arguments);
//     return nums.filter = num => num%2 === 0;
// ]

const filterOutOdds = (...args) => args.filter(nums => nums % 2 == 0);

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// function findLeast(...arguments){
//     return arguments.reduce((a,b) => a<b, 0);
//     }

const findMin = (...args) => Math.min(...args);

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// function mergeObjects(objOne, objTwo){
//     return [objOne,objTwo];
// }

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// function doubleAndReturnArgs(array,...arguments){
//     let doubArgs= arguments*2;
//     return [array,doubArgs];
// }

const doubleAndReturnArgs = (array,...arguments) => [...array,...arguments.map(v = v*2)];

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    randNum= Math.random().floor
    let randRem=items.splice(randNum,1);
    let copy= [...randRem];
    return copy;

}

const removeRand = (items) => {
    let index = math.floor(math.random() * items.length);
    return [...items.splice(index,1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    obj[key]= val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj= {...obj}
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1,...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const modObj= {...obj}
    modObj[key]=val;
    return modObj;
}