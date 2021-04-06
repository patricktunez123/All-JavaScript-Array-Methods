// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


//answer

const camelize = (str) => {
    const res = 
    str.split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')

    console.log(res)
}

camelize('list-style-image')