// Regular Expression
let text="KrupaBhavsar";
var n=text.search("z");//return -1 if element not available
var n=text.search("Krupa");//return position index

document.getElementById("demo").innerHTML=n;

var m=text.replace("Bhavsar","RakeshBhavsar");
document.getElementById("demo").innerHTML=m;

// for searching globally used js modifier such as  i, g, m, d

// i -case insensitive

var i=text.match(/krupabhavsar/i);
document.getElementById("demo").innerHTML=i;

// g-global search

let text1="Krupar'Bhavsar";
let g=text1.match(/ar/g);
document.getElementById("demo").innerHTML=g;//return ar,ar

// test() return true or false depending on the result

let text2 = document.getElementById("p01").innerHTML;
const pattern=/best/;

document.getElementById("demo").innerHTML=pattern.test(text2);



