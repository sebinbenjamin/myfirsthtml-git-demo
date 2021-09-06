let myColor = "Pink";
const favColor = "You like " + myColor;
// document.getElementsByTagName('h3')[0].innerHTML = favColor;

// how to define a function in javascript
// function getColor() {
//    prompt('What is your favorite color?'); 
// }

// functionName(parameters);
// alert('Heyyyy THis is an alert');
// getColor();

// // A function which accepts parameters.
// function sum(first, second) {
//    alert(first + second);
// }

// sum(10, 2);

// A function which accepts parameters.
// function sum(first, second) {
//    const result = first + second 
//    return result;
// }

// alert('The sum is ' + sum(10, 2));

// alert('The sum is ' + sum(15, 20));

function showName(){
   const myFavColor = prompt('Whats you fav color');
   document.getElementsByTagName('h3')[0].innerHTML = "I Like " + myFavColor;
   document.body.style.backgroundColor = myFavColor;
}