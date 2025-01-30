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

// Example usage
console.log(countVowels("Hello, World!")); // Output: 3
console.log(countVowels("JavaScript"));    // Output: 3
