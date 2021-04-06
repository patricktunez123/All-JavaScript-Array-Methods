// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.
// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

// The syntax is:

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);


// The function is applied to all array elements one after another and “carries on” its result to the next call.
// Arguments:

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

//Here we get a sum of an array in one line:
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

// The function passed to reduce uses only 2 arguments, that’s typically enough.
// Let’s see the details of what’s going on.
// On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on…

//We also can omit the initial value:
let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);
alert( result ); // 15


// The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.
// The calculation table is the same as above, minus the first row.
// But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.
// Here’s an example:

let arr = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current)

// So it’s advised to always specify the initial value.
// The method arr.reduceRight does the same, but goes from right to left.

//ex:
let arr = [1, 2, 3, 5]
const ans = arr.reduceRight((c, current) => c - current)
console.log(ans)

// example two
// 20 is the initial value
let arr2 = [20, 10, 10, 5]
const sum = arr2.reduce((sum, item) => sum + item, 20)
console.log('the sum is:', sum)