// this is good approach to deal with an object
const car={
    "name":"bmw",
    "color":"red",
    "price":"60 lakh",
    "showroom":function()
    {
        let showroom='infix';
        let cars=`${this.name} showroom is ${showroom}`;
        return cars;
    }
};
console.log(car["name"]="nano");
console.log(typeof(car));
console.log(car);





const car2 = new Object();


car2.name="bmw";
car2.color="red";
car2.price="60 lakh";
car2.showroom=function()
{
    let showroom='infix';
    let cars=`${this.name} showroom is ${showroom}`;
    return cars;
}

console.log(car2["name"]);
console.log(typeof(car2));
console.log(car2);

console.log(car2['name']="accent");
console.log(delete car2.name);//delete both key and value
console.log(car2["name"]);//undefined because this object is deleted
console.log(typeof(car2["name"]));//undefined

// dom and object


const movieInfo = {
    "name":"dark",
    "rating":5,
    "date":"09 june",
    "year":2004
};




// it is collection that is why we have mentioned the index number
document.getElementsByClassName("movie")[0].innerHTML = movieInfo.name + " " + movieInfo.rating;



// access using id
document.getElementById("movie").innerHTML = movieInfo.name + " " + movieInfo.rating;




let text= " ";
for(let x in movieInfo)
    {
        text += movieInfo[x]+ " ";

    };
    document.getElementById("movie").innerHTML = text;
// dark,5,09 june,2004[it will show the data including ending comma]
const myData=Object.values(movieInfo);
document.getElementById("movie").innerHTML = myData;



// when to get key and value used object.entries
var text1 = "";
for(let[i1,i2] of Object.entries(movieInfo))
    {
        text1 += i1 + ":" + i2 + "<br>" ;
    }
    document.getElementById("movie").innerHTML = text1;



// convert into json format
 let text3=JSON.stringify(movieInfo);
 document.getElementById('movie').innerHTML=text3;

