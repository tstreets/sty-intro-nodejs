/**
 * Module dependencies
 */
const other = require('./my_modules/other.js');

/**
 * This is the average number of cookies that I ate in the last week
 */
const cookiesAte = other.getAverage([1,2,3,4,5,6,7]);

console.log(cookiesAte);
