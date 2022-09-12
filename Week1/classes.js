class Employee {
  constructor(id, name, division) {   //constructor has 3 parameters
    this.id = id;   //1
    this.name = name;   //2
    this.division = division;   //3
  }
  login = () => {   //login function 
    console.log(this.name + "     has logged in");   //displays name of user with confirmation of log in
  }; 
}

let emp = new Employee(1, "abc", "hr");  //assigns values to parameters
emp.login();   //login

//new example
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  
//How to write a function and how to call a function
let a = 10;
let b = 20;
function runCodeToTerminal() {
   console.log( "The value of a + b is" , a+b );
}

// call the function to run the file.
runCodeToTerminal();

//
// basic JavaScript function
function runCodeFromTerminal() {
    let string1 = "welcome ";
    let string2 = "to the";
    let string3 = "COMP CLASS 229!";
    console.log(string1, string2, string3);
  }
  
  // call the function on run the file.
  runCodeFromTerminal();

  //
  // program to check if a number is prime or not

// take input from the user
const number = 12;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
