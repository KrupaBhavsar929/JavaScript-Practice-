// object
const person = {
    name2 :"krupa",
    lastname:"bhavsar",
    bloodGroup: "O-",
    address: {
        city:"baroda",
        state:"gujarat"
    }

};
// without  object destructing 
 let name1=person.name;
 let lastname1=person.lastname;

 

//  with  object destructing
let {name2,lastname,bloodGroup,address} = person;
document.write("name: "+ name2 + " lastname: "+ lastname+ "  bloodgroup: "+ bloodGroup+ " address:   "+JSON.stringify(address));

// function 

const cars={
    carName:"BMW",
    carColor:"red"
};
displayCar(cars);
displayCarDes(cars);
// without destructing function
function displayCar(car)
{
    document.write(car.carName);
    document.write(car.carColor);
}
// with destructing function

function displayCarDes({carColor})
{
    // document.write(carName);
    document.write(carColor);
}

// destructing map

const fruits= new Map([
["apple",500],
["banana",200],
["orange",100]

]);

let text="";
for(const[i,j]of fruits)
{
    text+=i + "is" + j;
}
document.getElementById("demo").innerHTML = text;


