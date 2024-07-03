// for each 
// ref technical thappa
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>";
}

// map

const no =[1,2,3,4];
let squareno= no.map(function(no)   
{
    return no*no;
});
document.write(squareno);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
document.write("<br>  </br>")
document.write(newArr);

// flat map example 
const numbers1 = [1, 2, 3, 4, 5];

// Create a new array with numbers and their squares
const expandedNumbers = numbers1.flatMap(number => [number, number * number]);

console.log("flat number" + expandedNumbers); 

// map

const expandedNumbers1 = numbers1.map(number => [number, number * number]);

console.log("flat number" + expandedNumbers1); 


// filter and map both

const age=[10,12,18,22,21];
// const over19= age.filter(no=>(no>19));
const over18 = 
age.map((value,index)=>({value,index})).filter(({ value }) => value >= 18);


console.log(over18);

const n=[10,20,30,40,50];
// return value
for (let number of n)
    {
        console.log(number);
    }
// return index
    for (let number in n)
        {
            console.log(number);
        }

// map
// use map when you dont want to change original array

let arr1=[
    {fname:"krupa"},
    {fname:"priti"},
];

let arr=[10,20,30];
 var b=arr.map(function(n)
{
    
    return n*2;
})
document.write("map: "+ b);

var c=arr1.map(function(n)
{

    return n.fname;
})
document.write("array and object: "+ c);