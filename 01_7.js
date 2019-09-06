/*
Objects
- syntax
- accessing properties in different ways
- adding and deleting properties
- methods

Classes
- constructors
- methods
- this

*/


let fido = {
    species: "dog",
    breed: "labradoodle",
    color: "tan",
    name: "Fido",
    speak: function() {
        return "Woof!";
    }
}

let morris = {
    species: "cat",
    breed: "tabby",
    color: "orange and black",
    name: "Morris",
    speak: function() {
        return "Meow!";
    }
}

for (a of [fido, morris]) {
    console.log(a.speak());
}

/*
 In the object fido, what is the role of 'breed'?
 - property
 - constructor
 - value
 - method
 
 In the object morris, what is the role of 'speak'?
 - key/value
 - method
 - constructor
 - this

 In the loop at lines 36-38, it's possible to call a.speak() because
 - both fido and morris are instances of the same class
 - both fido and morris have a method called 'speak()'
 - a.speak() will never execute, because the loop executes 0 times
 - fido and morris have all of the same properties and methods
 */

let studentRegistry = {};
let studentNames = [
    "Mary Shelley",
    "Charles Dickens",
    "Jane Austen",
    "Thomas Hardy",
    "George Eliot",
    "Lewis Carroll"
]

for (let i = 0; i < studentNames.length; i++) {
    studentRegistry[i] = studentNames[i];
}

console.log(studentRegistry);

for (let id of [1, 3, 8]) {
    delete studentRegistry[id];
}

console.log(studentRegistry);

/*
 After running the above code (lines 70-72), in the object studentRegistry, what is the property associated with the value "Thomas Hardy"?
 - Jane Austen
 - string
 - '3'
 - studentNames[3]
 
After running 76-78, how many properties does studentRegistry contain?
- 6
- 0
- 3
- 4

After running 76-78, what is the value of studentRegistry[1]?
- Charles Dickens
- Jane Austen
- Mary Shelley
- undefined
 */

class MenuItem {
     constructor(name, price, calories) {
         this.name = name;
         this.price = price;
         this.calories = calories;
     }

     discountPrice(discount) {
         return this.price * (1.0 - discount);
     }
 }

let menu = {
    cb: new MenuItem("Cheeseburger", 7.99, 800),
    hd: new MenuItem("Hot Dog", 4.99, 550),
    ff: new MenuItem("French Fries", 3.49, 490)
}

let order = [menu.cb, menu.ff];
let discount = 0.1;
let total = 0;

for (item of order) {
    total += item.discountPrice(discount);
}

console.log(total);

/* 
What is the difference between price and discountPrice in the class MenuItem?
- discountPrice will always be lower than price
- price is a class property, discountPrice is a class member
- all instances of MenuItem will have a price but only some will have a discountPrice
- price is a string, discountPrice is a number


In what order do the lines of code execute in the above code?
- 103, 109, 115, 120, 125
- 115, 103, 120, 125, 109
- 125, 109, 115, 120, 103
- 120, 115, 109, 125, 103



*/