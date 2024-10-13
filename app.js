// chapter 35 to 38

// 1.
// function res() {
// var date = new Date();
// console.log(date)
// }
// res();

// 2.
// function greetuser(firstName,lastName){
    
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "!");

// }
//  greetuser(prompt("Enter firstname"),
//     prompt("Enter lastname"));

// 3.
// function user(firstNum, secondNum) {
//     var res = firstNum + secondNum;
//     return res;
// }

// var firstNum = +prompt("Enter the first number:");
// var secondNum = +prompt("Enter the second number:");

// var result = user(firstNum, secondNum);

// console.log("The sum of the two numbers is: " + result);

// 4.
//  function calc(firstNumber,secondNumber,operator){
//     if (operator === "+"){
//         return firstNumber + secondNumber;
//     } 
//  else if(operator === "-") {
//     return firstNumber - secondNumber;
//     }
// else if(operator === "*") {
//     return firstNumber * secondNumber;
//     }
// else if(operator === "%") {
//     return firstNumber % secondNumber;
//     }
//     else if(operator === "/") {
//      return firstNumber / secondNumber;
//      }
//      else{
//         return "invalid ";
//      }     
//  }
//  console.log(
//     calc(
//         +prompt("Enter first value" ),
//         +prompt("Enter second value"),
//         prompt("Enter any operator (+, -, *, /, %):")));


// 5.
// function square(num) {
//     return num * num; 
// }


// var result = square(7);
// console.log("The square of 7 is: " + result);

// 9.

//  document.write("<h2>arguments as Values</h2>")
// function calculateArea(width,height){
//     return width * height;
// }
// const area1 = calculateArea(5, 10);  
// document.write("The area of the rectangle is: " + area1); 


// document.write("<h2>arguments as Variables</h2>")
// function calArea(width,height){
//      return width * height;
// }
// var rectWidth = 7;
// var rectHeight= 12;

// const area2 = calculateArea(rectWidth, rectHeight); 
// document.write("The area of the rectangle is: " + area2);  


// 10.
// palindrome program

// function palindrome(word){
//   var reservedWord = "";

//     for(var i = word.length -1 ;i >= 0;i--) {
//       reservedWord += word[i]
//     }


// if (word === reservedWord) {
//     console.log(word, "is palindrome");
// }
//     else {
//         console.log(word, "is not palindrome");
//     }

// }
// palindrome(prompt("Enter a word"));  


// 11.
// function countOccurrences(str, letter) {
//     var count = 0; 

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var exampleString = 'JSResourceS.com';
// var letterToFind = 'o';
// var occurrences = countOccurrences(exampleString, letterToFind);
// console.log("The letter '" + letterToFind + "' appears " + occurrences + " times.");  



// chapter 38 to 44
// 1.
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return year + " is a leap year.";
//     } else {
//         return year + " is not a leap year.";
//     }
// }

// var year = +prompt("Enter a year:");
// alert(isLeapYear(year));


// 2.
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// var myString = "JavaScript";
// var characterToFind = 'p';
// var index = customIndexOf(myString, characterToFind);
// console.log("Index of '" + characterToFind + "' is: " + index);  

// // 3.
// function removeVowels(sentence) {
//     var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
//     let result = "";

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
    
//     return result; 
// }

// var sentence = "This is an example.";
// var noVowels = removeVowels(sentence);
// console.log(noVowels); 