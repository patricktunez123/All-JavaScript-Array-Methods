//The find method looks for a single (first) element that makes the function return true.

//If there may be many, we can use arr.filter(fn).

//The syntax is similar to find, but filter returns an array of all matching elements:

// let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
//   });




//Example two
const users = [
    {id: 1, username: 'tunez', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 2, username: 'patrick', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 3, username: 'stico', password: 'YsKKsA223AAawQQ.KASKASxs8SS'},
    {id: 4, username: 'diane', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 5, username: 'tina', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 6, username: 'mugwi.irene', password: 'FsjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 7, username: 'ange', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 8, username: 'teta', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 9, username: 'grace', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'},
    {id: 10, username: 'aimee.u', password: 'ksjsdsA223AAawQQ.KASKASxs8SS'}
]

// the index and arr parms are optional
const filterdUsers = users.filter((item, index, arr) => {
    console.log(arr)
    console.log(index)

    return item.id >= 5
})

console.log(filterdUsers)