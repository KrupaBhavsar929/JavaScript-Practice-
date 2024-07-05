// call():

// using call one object can access to another object propety

const person1={

    firstName:"krupa",
    age:23,
}

const person2={

    firstName:"preksha",
    age:22,
}

const bussiness=
{
    clientInfo:function()
    {
        return this.firstName + " " + this.age;
    }
}

// access the data
document.write(bussiness.clientInfo.call(person1)+"<br></br>");
document.write(bussiness.clientInfo.call(person2)+"<br></br>");

// call() vs apply()
// call : it has this keyword in the argument.
// apply: in the argument we can apply array of object.

// call:
function greet(greeting,punctutaion)
{
    console.log(greeting+ ' , ' +this.name+punctutaion);
}
const person=
{
    name:'Krupa'
};

greet.call(person,'Hello','!');


// apply:

function greet1(greeting,punctutaion)
{
    console.log(greeting+ ' , ' +this.name+punctutaion);
}
const person4 =
{
    name:'Krupa'
};

greet1.apply(person4,['Hello','!']);

// bind():object borrow method from another object

function greet5(greeting,punctutaion)
{
     function fullName()
    {
    console.log("binding: "+ greeting+ ' , ' +this.name+punctutaion);
    }

    return fullName;
}
const person5 =
{
    name:'Krupa',
};

const a=greet5('hi',',').bind(person5);
a();

// function closure()

// it is one type of function which blind with lexical environment

function init()
{
    var name="Mozilla";
    function display()
    {
        console.log(name);
    }
    display();//Mozilla
    name="Google";
    display();//google
}
init();


// if we want to access the data. first call that function. if that function found inside another outside function then call that outside function.
function sample()
{

const a1 = ()=>
{
    let afirst=100;
    const b1=()=>
    {
        const c1=()=>
        {
            
        }
    }
    console.log(afirst);;
}
return a1;
}

 let x=sample();
 x()
