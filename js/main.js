'use strict';


const searchPolindrome = (gridedString, median) => {

    const length = (gridedString.length) - 1;
    let i = median - 1;

    // Enumeration, comparison of lateral values from each median.
    for ( let j = median + 1; i > 0 && j < length; i--, j++ ) {
       if ( gridedString[i] !== gridedString[j] ) {
          return median - i;
       }
    }
    return median - i;
};
  
const whatLongestPolindrome = str => {
    const gridString = ['#'];
    // Take a line, and add a grid on both sides of the characters
    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] !== ' ' ) {
            gridString.push(str[i], '#');
        }
    }

    // Calculate the radii of all possible palindromes from each character
    const radius = [];
    for ( let i = 0; i < gridString.length; i++ ) {
        radius[i] = searchPolindrome(gridString, i);
    }

    const writeFinalString = () => {

        // Find the index and median radius of the longest palindrome
        let count = 0;
        let index = 0;
        let newString = '';

        radius.forEach( (item, i) => {
            if ( radius[item] > 0 ) {
                if ( count < item ) {
                    count = item;
                    index = i;
                }
            }
        });

        // Write the left side of the medina to the line
        for ( let i = index - 1; i > index - count; i-- ) {
            newString += gridString[i];
        }

        // Flip The First Line
        newString = newString.split('').reverse().join('');

        // Add the median and the right side of the median
        for ( let i = index; i < index + count; i++ ) {
            newString += gridString[i];
        }

        // Remove the lattice, bring the string to normal
        let longestPolindrome = '';

        newString.split('').forEach( item => {
            if ( item !== '#' ) {
                longestPolindrome += item;
            }
        });
        
        return console.log(longestPolindrome);
    };

    writeFinalString();

};

whatLongestPolindrome('fffkffgffkfdk');
