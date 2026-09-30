
let letter = 0
let 
const vowel = ["a", "e", "i", "o", "u"]
function countVowels(str) {
for (let i = 0; z < str.length; i++){
if (vowel.includes(str[i])){
letter++
}
}
console.log(letter)
}


console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5