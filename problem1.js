function getNumbersInRange(start,end){
   let result = [""];
    let i = start;
   for (i < end){
    i++;
        getNumbersInRange.push("i");
   }
}
   console.log(result);

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]