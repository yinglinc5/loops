function getNumbersInRange(start,end){
   let results = [];
   for (let i = start; i <= end;  i++){
        
      results.push(i);
   }
   console.log(results);
}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]