// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
    const copyAsc=[...array]
    const copyDesc=[...array]

    copyAsc.sort((a, b) => a - b)
    copyDesc.sort((a, b) => b - a)

    if (array.every((value, index) => value === copyAsc[index])) {
        return "yes, ascending";
      } else if (array.every((value, index) => value === copyDesc[index])) {
        return "yes, descending";
      } else {
        return "no";
      }
    }