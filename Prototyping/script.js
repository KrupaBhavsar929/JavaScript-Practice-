function Person(fname,lname)
{
    this.fname=fname,
    this.lname=lname
};
// you can't add more methods and properties in the function.
var a = new Person();
a1=a.fname="krupa";
a2=a.lname="bhavsar";
console.log(a1+ "  "+ a2);

// using prototype add more property and constructor
Person.prototype.gender="female";

const person1=new Person("priti","bhavsar");
const person2=new Person("rakesh","bhavsar");

console.log(person2);


Person.prototype.fullName=function()
{
    return this.fname + " "+ this.lname;
};

console.log(person1.fullName());
// return priti bhavsar

// change prototype value

function Name()
{
    this.fname="elon"
};
Name.prototype.age=25;
const per1=new Name()
console.log(per1.fname+ " "+ per1.age);
Name.prototype={age:30};
const per2=new Name()
console.log(per2.fname+ " "+ per2.age);



