//The arr.map method is one of the most useful and often used.
//It calls the function for each element of the array and returns the array of results.
//The syntax is:

// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });

// For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


// axample two
const arr = ['Patrick', 'Tunez', 'javascript', {id: 1, name: 'Stico'}]
const res = arr.map((item, index, arr) => {
    console.log(item)
    console.log(arr)
    console.log(index)

    return item.length
})

console.log('res: ', res)