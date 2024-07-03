// use strict and hoisting
'use strict'
var x=12;
console.log(x);

let myObject = {
    x: 3.14,
    y: 42
};

delete myObject.x; 
// it allowd to delete the data
console.log(myObject.x)

function print()
{
    console.log("hello");   
}

 var print2=()=>
    {
        console.log("its krupa here");
    }
    print2();

// not allowed in the strict mode
// delete x;