# Webpack 
 - formattedMain.js has a simplified verion of what webpack outputs when bundling

## How webpack works - common js syntax

1. Webpack creates an array of modules, using the file names as keys, and a function as the value.

2. Webpack creates a function (webpack_require) and uses that instead of the normal require in a file.

2a. The webpack_require function is called with the file name (or full file path)

Note: Contrived does not use file path which restricts the names of files you can have. This would be a good improvement.

2b. Inside the webpack_require the file name is passed to the array of modules to set moduleFn equal to the value of the key passed. The key passed is the file name / path and the value is a function which sets the passed in module's export property to whatever the original module exported.

2c. The webpack_require then creates a module object with an empty exports object property.

2d. it then passes that object to the moduleFn function as the module property.

2e. the moduleFn function (the function from the webpack_modules object) effectively sets the empty module's exports value to whatever the original module's exports value was. In this example it is 'hi there'

At this point the module inside webpack_require looks like this:

```js
module {
  exports: 'Hi there',
}
```

2f. the webpack_require function then returns the export property or in this example simple 'hi there';

3. When this function returns, it has set the value of message in the index.js file equal to the string 'hi there', which came from the message module.

4. The message is then console logged out in index.js




## How webpack works - ES Module syntax
