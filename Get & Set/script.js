// getName
var book = {

    novel:"harry potter",
    price:200,

    get getname()
    {
        return this.novel + " " + this.price;
    }
};

console.log(book.getname);

// setName
// add more data
var book1 = {

    novel:"harry potter",
    price:200,

    set setname(n)
    {
        this.novel=n.toUpperCase();
    }
};

book1.setname = "ikigai";
console.log(book1);

