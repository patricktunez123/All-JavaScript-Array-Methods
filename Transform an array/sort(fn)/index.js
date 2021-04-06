//The call to arr.sort() sorts the array in place, changing its element order.
//It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

//For instance:
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2

//Did you notice anything strange in the outcome?
//The order became 1, 15, 2. Incorrect. But why?

// The items are sorted as strings by default.
// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
// To use our own sorting order, we need to supply a function as the argument of arr.sort().
// The function should compare two arbitrary values and return:

function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
  }

//For instance, to sort as numbers:
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  alert(arr);  // 1, 2, 15


//examlpe two

const arr = [1, 2, 15]
const compareNumbers = (a, b) => {
    if (a > b) {
        return 1
    }
    if (a < b){
        return -1
    }
    if (a == b) {
        return 0
    }
}

const res = arr.sort(compareNumbers)
console.log(res)


// Use localeCompare for strings

// Remember strings comparison algorithm? It compares letters by their codes by default.
// For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
// For example, let’s sort a few countries in German:

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)