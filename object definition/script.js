// general method

// Object.create(proto, [propertiesObject])
// Creates a new object with the specified prototype object and properties.

const person=
    {
        isHuman: false,
        printIn: function()
        {
            console.log(`My name is ${this.name}, Am I human: ${this.isHuman}`);
        }
    };

    const me= Object.create(person);
    me.name='Krupa';
    me.isHuman=true;
    me.printIn();


// Object.assign(target, ...sources)
// Copies all enumerable own properties from one or more source objects to a target object

const target ={a:10, b:20};
const source={c:30, b:40};

// b value change to 40
const final =Object.assign(target,source);
document.write(final);
console.log(final);


// Object.keys(obj)
// Returns an array of a given object's own enumerable property names.

const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values(obj)
// Returns an array of a given object's own enumerable property values.
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries(obj)
// Returns an array of a given object's own enumerable property [key, value] pairs.

console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]


// method that transforms a list of key-value pairs into an object. This is particularly useful when you have an array of arrays, where each sub-array represents a key-value pair.

const entries = [
    ['name', 'Alice'],
    ['age', 30],
    ['city', 'Wonderland']
  ];
  
  const obj1 = Object.fromEntries(entries);
  
  console.log(obj1);

//   Symbol:Symbols are often used to add unique property keys to an object 
console.log(Symbol("krupa")==Symbol("krupa"));//return false both are unique

// Object freeze()
// Freezes an object, preventing new properties from being added to it and existing properties from being removed or changed.
const person1 = {
    name: 'John',
    age: 30
  };
  
  Object.freeze(person1);
  
  person1.age = 31; // This will not work
  person1.city = 'New York'; // This will not work
  
  console.log(person1);
  // Output: { name: 'John', age: 30 }

//   Object.seal()
// Seals an object, preventing new properties from being added to it, but allowing existing properties to be modified.
const person2 = {
    name: 'John',
    age: 30
  };
  
  Object.seal(person2);
  
  person2.age = 31; // This will work
  person2.city = 'New York'; // This will not work
  
  console.log(person2);
  // Output: { name: 'John', age: 31 }


// Property Management Method


// Object.defineProperty():
// Defines a new property directly on an object, or modifies an existing property

// const car={};
// Object.defineProperty(car,'name',{
// value:'krupa'
// });
// console.log(car.name);
// car.name='Jiya';
// console.log(car.name);//it will not change the property

const car={};
Object.defineProperties(car,{
name:
{
    value:'bmw',
    writable:true,
},
age:
{
    value:23,
}
});


console.log(car.name);
car.name='accent';
console.log(car.name);

// getOwnPropertyDescriptor(object,property):
// it will only get single property of the object
const network={
    name:"jio fiber"
};
const description=Object.getOwnPropertyDescriptor(network,'name');
const description2=Object.getOwnPropertyDescriptor(network);//the syntax is wrong 
console.log(description2);


// getOwnPropertyDescriptors(object):
// Returns an object containing all own property descriptors of an object.

const networks={
    name:"jio fiber",
    price:2000
};
const descriptions=Object.getOwnPropertyDescriptors(networks);
 
console.log(descriptions);

// // Returns all properties as an array

// Object.getOwnPropertyNames(object):
// This method is useful when you want to ensure that an object’s structure remains fixed after a certain point in its lifecycle, while still allowing modifications to its existing properties.
const personName = {

    name:'priti',
    age:23
}
Object.defineProperty(personName,'gender',
    {
        value:'female',
        enumerable:false
    }
);
const propertyName=Object.getOwnPropertyNames(personName);
console.log(propertyName);

// prevent Extensions
// Create an object
const car = {
    make: 'Toyota',
    model: 'Corolla'
  };
  
  // Prevent new properties from being added to the car object
  Object.preventExtensions(car);
  
  // Try to add a new property
  car.year = 2021;
  
  console.log(car.year); // Output: undefined
  
  // Modify an existing property
  car.model = 'Camry';
  console.log(car.model); // Output: Camry
  
  // Delete an existing property
  delete car.make;
  console.log(car.make); // Output: undefined
  
  // Check if the object is extensible
  console.log(Object.isExtensible(car)); // Output: false
  
  









