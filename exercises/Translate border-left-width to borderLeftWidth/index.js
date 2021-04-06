// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


//answer

const camelize = (str) => {
    const res = 
    str.split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    // capitalizes first letters of all array items except the first one
    // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')  // joins ['my', 'Long', 'Word'] into 'myLongWord'

    console.log(res)
}

camelize('list-style-image')