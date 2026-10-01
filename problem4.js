
const vowel = ["a", "e", "i", "o", "u"];
function countVowels(str) {
      let letter = 0; 
for (let i = 0; i < str.length; i++){   
if (vowel.includes(str[i])){
  
letter++;
}
}
return letter
}


console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5