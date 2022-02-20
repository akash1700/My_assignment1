//Write a javaScript program to ger the current date?

let currentDate=new Date();
let date=currentDate.toLocaleDateString();
console.log(date);

//Write a JavaScript program to remove a character at the specified position of a given string and return the new string?

let str="Hello pial how are you";
let dd=str.slice(0);
console.log(dd);

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or not , if so then print the number?
function test(x) 
{
  if (x % 3 == 0 ) 
  {
    return  `${true} the number is :${x}`;
  } 
  else {
    return `${false} the number is :${x}`;
  }
}

console.log(test(12));
console.log(test(14));
