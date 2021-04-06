//The arr.forEach method allows to run a function for every element of the array.

//The syntax:

arr.forEach(function(item, index, array) {
  // ... do something with item
});

//ex

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// And this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });