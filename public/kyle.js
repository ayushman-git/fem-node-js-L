console.log(typeof [2, 3, 4]);

//Figuring out NaN
let aName = "Ayushman";
let aNan = aName / 2;
console.log(isNaN(aNan));
console.log(isNaN(aName));
console.log(NaN == NaN);

//new keyword is used to create a new object
//without new we are converting to that object
let dateObj = new Date("August 30, 2020");
console.log(dateObj);
let aPie = Math.PI;

//convert to a string.
console.log(typeof String(aPie));

//Falsey values
console.log(Boolean(0) + " 0");
console.log(Boolean(-0) + " -0");
console.log(Boolean(NaN) + " NaN");
console.log(Boolean(undefined) + " undefined");
console.log(Boolean(null) + " null");
//Anything other than the falsey values will be a truthy value including a function
//We can use !! in place of Boolean() to convert the adjacent value into boolean.
console.log(!!2 + " using !! instead of Boolean()");

//Here we are changing a value of variable that is never defined in a non-strict mode. So JS will create this new variable.
//This new variable will be stored in global var (If its in a class then it will be stored in that class.)
const aFunction = () => {
  //its an undeclared variable
  creatingLet = 32;
};
//creatingUndefined is an undefined variable - it don't have any value
let creatingUndefined;

aFunction();
console.log(creatingLet);

//Function Expressions
//Anonymous function expression
const anonymousFunction = function () {
  console.log("Anonymous function expression");
};
//Named function expression
const namedFunction = function namedFunction() {
  console.log("Named function expression");
};
anonymousFunction();
namedFunction();

//IIFE - Immediately Invoked Function Expression
//These are used to don't pollute the global variables but still they can use same name.
//We must not reassign the value but instead create a new var with same name.
let userName = "XenOn";
(function iife() {
  var userName = "Duoro";
  console.log(userName + " IIFE");
})();
console.log(userName);
//As of ES2015, we are using let keyword to get the same output.
function notIife() {
  let userName = "Duoro";
  console.log(userName + " let");
}
notIife();
console.log(userName);
//Explicit let block
if (!!1) {
  //We can create a block anywhere to create a let variable.
  //This can be useful where we want to perform some calculations and for that we need new variables but disposing them after use.
  {
    let game = " csgo".toUpperCase();
    userName = userName + game;
  }
  console.log(userName);
}


//Closure means whenever a function is created it has a sense of variables in its evirnoment.
//So the anonymous function in setTimout knows what closureVar is. In a normal case scenario the closureVar will be disposed
//after running once. But because of closure that variable stays alive.
const cloSure = (closureVar) => {
  setTimeout(() => {
    console.log(closureVar);
  }, 1000)
}
cloSure("A random string");

//Class can be used to create several instance of a prticular group of data.
class Workshop {
  //Initializes values passed while creating an instance.
  constructor(name) {
    this.name = name;
  }
  ask(question) {
    console.log(this.name, question);
  }
}
//Creating instance of Workshop
let InstOne = new Workshop("Ayushman");
let InstTwo = new Workshop("Aman");

InstOne.ask("A random question?");
InstTwo.ask("Another random question?");