function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"; // List of vowels

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, World!")); 
console.log(countVowels("JavaScript"));    
