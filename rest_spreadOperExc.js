

//filterOutOdds ES15 Version 
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)


// findMin
const findMin = (...nums) => Math.min(...nums);



// mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});



// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]




/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    items.splice(Math.floor(Math.random() * items.length), 1);
    return Array.from(items);
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]




/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({

    ...obj,
    [key]: val,
})




/** Return a new object with a key removed. */

const removeKey = (obj, key) => delete obj[key] ? ({ ...obj }) : undefined;



/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({
    ...obj1,
    ...obj2
})




/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({
    [key] : val,
     ...obj
})

