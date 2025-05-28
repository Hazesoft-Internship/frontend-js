//1. Program to find longest word in a given sentence ?
function findLongestWord(sentence) {
    let word = "", longest = "";
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            if (word.length > longest.length) longest = word;
            word = "";
        } else {
            word += sentence[i];
        }
    }
    return longest;
}


// Example 
const sentence = "The quick brown fox jumps over the lazy dog.";
const longestWord = findLongestWord(sentence);
console.log("Longest word:", longestWord);


// 2. How to check whether a string is palindrome or not ?

function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}


// Example 
const input = "race car";
if (isPalindrome(input)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}


// 3. Write a program to remove duplicates from an array ?
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) exists = true;
        }
        if (!exists) unique.push(arr[i]);
    }
    return unique;
}

// Example
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);

// 4. Program to find Reverse of a string without using built-in method ?

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString);


// 5. Find the max count of consecutive 1’s in an array ?

function maxConsecutiveOnes(arr) {
    let max = 0, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            if (count > max) max = count;
        } else {
            count = 0;
        }
    }
    return max;
}

// Example
const binaryArray = [1, 1, 0, 1, 1, 1, 0, 1];
const maxCountOfOnes = maxConsecutiveOnes(binaryArray);
console.log("Max count of consecutive 1's:", maxCountOfOnes);


// 6. Find the factorial of given number ?

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example
const number = 5;
const factorialResult = factorial(number);
console.log(`Factorial of ${number} is:`, factorialResult);


// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

function mergeSortedArrays(arr1, arr2) {
    let merged = [], i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

// Example
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
const mergedAndSortedArray = mergeAndSortArrays(array1, array2);
console.log("Merged and sorted array:", mergedAndSortedArray);

// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function same(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                arr2[j] = null; // mark as used
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

// Example
const array3 = [1, 2, 3];
const array4 = [1, 4, 9];
const result = hasMatchingSquares(array3, array4);
console.log("Do the arrays have matching squares?", result);


// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        let found = false;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                str2 = str2.substring(0, j) + str2.substring(j + 1);
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

// Example
const string1 = "listen";
const string2 = "silent";
const canForm = canRearrange(string1, string2);
console.log("Can the second string be formed by rearranging the first?", canForm);

// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

function getUniqueObjects(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i].name === result[j].name) exists = true;
        }
        if (!exists) result.push(arr[i]);
    }
    return result;
}

// Example
const inputArray = [
    { name: "sai" },
    { name: "Nang" },
    { name: "sai" },
    { name: "Nang" },
    { name: "111111" }
];
const uniqueObjectsArray = getUniqueObjects(inputArray);
console.log("Unique objects:", uniqueObjectsArray);

// 11. Write a JavaScript program to find the maximum number in an array.

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Example
const numbersArray = [3, 5, 7, 2, 8];
const maxNumber = findMaxInArray(numbersArray);
console.log("Maximum number in the array:", maxNumber);


// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function getEvenNumbers(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(arr[i]);
    }
    return even;
}


// Example
const mixedArray = [1, 2, 3, 4, 5, 6];
const evenNumbersArray = filterEvenNumbers(mixedArray);
console.log("Even numbers in the array:", evenNumbersArray);


// 13. Write a JavaScript function to check if a given number is prime.

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Example
const primeNumber = 7;
if (isPrime(primeNumber)) {
    console.log(`${primeNumber} is a prime number.`);
}
else {
    console.log(`${primeNumber} is not a prime number.`);
}

// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function findLargest(arr) {
    let max = -Infinity;

    function search(subArr) {
        for (let i = 0; i < subArr.length; i++) {
            if (typeof subArr[i] === "number") {
                if (subArr[i] > max) max = subArr[i];
            } else {
                search(subArr[i]);
            }
        }
    }

    search(arr);
    return max;
}

// Example
const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
const largestElement = findLargestInNestedArray(nestedArray);
console.log("Largest element in the nested array:", largestElement);


// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonacci(n) {
    let result = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        result.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    return result;
}

// Example
const numberOfTerms = 10;
const fibonacci = fibonacciSequence(numberOfTerms);
console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`, fibonacci);

// 16. Given a string, write a javascript function to count the occurrences of each character in the string.

function countChars(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!count[ch]) {
            count[ch] = 1;
        } else {
            count[ch]++;
        }
    }
    return count;
}

// Example
const inputString2 = "hello world";
const characterOccurrences = countCharacterOccurrences(inputString2);
console.log("Character occurrences:", characterOccurrences);

// 17. Write a javascript function that sorts an array of numbers in ascending order.

function sortAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Example
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortArrayAscending(unsortedArray);
console.log("Sorted array in ascending order:", sortedArray);


// 18. Write a javascript function that sorts an array of numbers in descending order.

function sortDesc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Example
const unsortedArray2 = [5, 3, 8, 1, 2];
const sortedArrayDescending = sortArrayDescending(unsortedArray2);
console.log("Sorted array in descending order:", sortedArrayDescending);

// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
function reverseWords(sentence) {
    let word = "", words = [];
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            words.push(word);
            word = "";
        } else {
            word += sentence[i];
        }
    }

    let reversed = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i > 0) reversed += " ";
    }
    return reversed;
}

// Example
const inputSentence = "Hello World from JavaScript";
const reversedWords = reverseWordsInSentence(inputSentence);
console.log("Reversed words in sentence:", reversedWords);

// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.

function flattenArray(arr) {
    let result = [];

    function flatten(sub) {
        for (let i = 0; i < sub.length; i++) {
            if (Array.isArray(sub[i])) {
                flatten(sub[i]);
            } else {
                result.push(sub[i]);
            }
        }
    }

    flatten(arr);
    return result;
}

// Example
const nestedArray2 = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray2);
console.log("Flattened array:", flattenedArray);

// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

function stringToObject(path, value) {
    let parts = "";
    let keys = [];

    for (let i = 0; i <= path.length; i++) {
        if (path[i] === '.' || i === path.length) {
            keys.push(parts);
            parts = "";
        } else {
            parts += path[i];
        }
    }

    let obj = {};
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = {};
        current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    return obj;
}

// Example
const inputString3 = "a.b.c";
const inputValue = "someValue";
const resultObject = convertStringToObject(inputString3, inputValue);
console.log("Converted object:", resultObject);



