// Object Construction

function Person(firstName,lastName,age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
   
}

 user1=new Person("krupa","bhavsar",23);
 let userInfo = "";

// document.getElementById("movie").innerHTML = user1.lastName;
for (let key in user1) {
    // if (user1.hasOwnProperty(key)) 
    // it return true if that property inside the function
    
    {
        userInfo += `${key}: ${user1[key]}<br>`;
    }
}

// Output the result to the HTML element with id "movie"
document.getElementById("movie").innerHTML = userInfo;