// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
if (!array || array.length === 0) {
        return 0;
      }
const sorted=array.sort((a,b)=>a-b)
sorted.pop()
sorted.shift()
const sum=sorted.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
return sum
}