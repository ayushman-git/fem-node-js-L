//In object we store valeus as reference. Non-primited (objects) are stored as reference.
let anObj = {
  name: "Ayushman",
  age: 22,
};
Object.keys(anObj).forEach((name) => {
  console.log(name);
});
//Here it will be stored as a value. Primitive values are stored as value.
let sameName = anObj.name;
anObj.name = "Aman";
console.log(anObj.name);
console.log(sameName);

//.name will result into "A" because array is an object.
let arr = [];
arr[0] = 21;
console.log(arr.length); //Once putting keys in arrays it loses the the length and other properties.
//We use '.' notation when the variable name is a string literal, if it's digit we use []
//That's why we mostly use array with brackets because by default array index are digits.
arr.name = "A";
//We can use [] with '' both in arrays and objects.
arr["age"] = 22;
let who = arr.name;
console.log(arr.length);
//So we can use [] with objects as well.
console.log(anObj["name"]);

//
console.log(Array.isArray(arr));
arr.push(3);
console.log(arr.length);

//Practicing Objects
const diffObj = {};
diffObj.profile = {};
diffObj["profile"]["perOne"] = { name: "Ayushman", age: 22 };
diffObj["profile"]["perTwo"] = { name: "Aman", age: 21 };
diffObj.profile.perTwo.username = "XenOn";

console.log(diffObj);

//Practicing Arrays
const anotherArray = [];
anotherArray.push(2, 3, 2, 7, 1);
anotherArray.unshift("Unshift");
anotherArray.pop(); //removes last element
anotherArray.shift(); //removes first element
anotherArray[12] = 77;
anotherArray.name = "A";
anotherArray["age"] = 12;
console.log(anotherArray);
//Here we are freezing the array (an object) so we can't chagne the value in it.
Object.freeze(anotherArray);

//Destructuring (Arrays)
//In arrays order is important, so a will be assigned 10, b will be assigned 23 and so on.
const someArray = ["desX", "desY", "desZ"];
let [a, b, c, s, d] = [10, 23, 12, 42];
console.log(a, b);
//Swapping values with destructuring
[a, b] = [b, a];
console.log(a, b);
let [x, y, z] = someArray;
let [po, , iu] = someArray; //We are leaving one sp
console.log(po, iu);
console.log(a, b, c, s, d); // Here d will be undefined because its not assigned a value
console.log(x, y, z);

//Destructuring (Objects)
const someObj = { somethingCool: "XenOn", anotherCoolThing: "Duoro" };
const randomObj = {
  _id: "5f27a6fbd8c29e6fdd4db369",
  index: 0,
  isActive: false,
  balance: "$2,373.07",
  age: 40,
  eyeColor: "blue",
  name: "Dale Hart",
  gender: "female",
  company: "LYRIA",
  email: "dalehart@lyria.com",
  phone: "+1 (964) 528-2323",
  address: "595 Degraw Street, Harrison, Tennessee, 2680",
  latitude: 26.94436,
  longitude: 117.72457,
  tags: [
    "aliqua",
    "consequat",
    "est",
    "deserunt",
    "consectetur",
    "amet",
    "cillum",
  ],
  add: [2, 3, 1, 2, 4, 2, 1, 11],
};
let { q, w, e, r } = {
  q: { something: "Another Thing" },
  w: { anotherThing: "Some Thing" },
  e: 1,
  r: 10,
};
let { somethingCool, anotherCoolThing } = someObj;
console.log(q, w, e, r);
console.log(somethingCool, anotherCoolThing);
//We can rename the variable name.
let { tags, latitude: lat, longitude: long } = randomObj;
//We are using spread (...) operator to select everything else
let { _id: id, ...everythingElse } = randomObj;
console.log(lat, long, tags);
console.log(id, everythingElse);

//Loopping Arrays
function loopingThroughArraysInObj() {
  randomObj.tags.forEach((iteration) => {
    console.log(iteration);
  });
}
loopingThroughArraysInObj();

//Looping Objects
function loopingThroughObj() {
  for (keys in randomObj) {
    console.log(randomObj[keys]);
  }
}
loopingThroughObj();

//
const lol = {
  suspects: [
    {
      name: "A",
      color: "red color",
    },
    {
      name: "B",
      color: "green color",
    },
  ],
};

let [{ color: red }, { color: green }] = lol.suspects;
console.log(red, green);

function loopingExample() {
  for (let i = 0; i < lol.suspects.length; i++) {
    for (let keys in lol.suspects[i]) {
      console.log(keys);
    }
  }
}
loopingExample();

//Using forEach
function objInFunction(giveMeName) {
  return {
    someName: giveMeName,
    length: giveMeName.length,
    funcInObj() {
      console.log("Hello " + giveMeName);
    },
  };
}
let againAnArray = ["Ayushman", "Farket", "Suzy"];
let againArray = [];
//Using forEach to populate variable from a function which is returning object.
// againAnArray.forEach((name) => {
//   againArray.push(objInFunction(name));
// })

// for (let i = 0; i < againAnArray.length; i++) {
//   againArray[i] = objInFunction(againAnArray[i]);
// }
//Using array to do the same thing
againArray = againAnArray.map((name) => {
  return name;
});
console.log(againArray);

let someThing = [2, 3, 1, 2, 3];
//Map iterated through each element and return an array with the output. forEach don't return anuthing.
let mapVar = someThing.map((num) => {
  return "The number is " + num;
});
console.log(mapVar);

//filter
//creates a new array with values that passes the function test
let lessThan = someThing.filter((num) => {
  return num <= 2;
});
console.log(lessThan);

//Projection Exercise
const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

let someData = videoData.filter(function (name) {
  return name.present;
});
let onlyNames = [];
for (let i in someData) {
  onlyNames.push(someData[i].name);
}

console.log(onlyNames);

//Arguments function
function argumentsCheck(a, b, ...c) {
  // debugger; //Used to add debugger
  //arguments keyword shows all the arguments passed while invoking a functions;
  const arr = Array.from(arguments); //It will convert an array like object into actual array.
  //arguments by default is an array like object. So we can't use array functions like push, join etc.
  console.log(Array.isArray(arr));
  return a + b + d;
}
//We cannot use arguments with an array function.
// const argumentsCheckArrow = (a, b) => {
//   //arguments keyword shows all the arguments passed while invoking a functions;
//   console.log(arguments);
//   //It is actually an array like object. So we can't use array functions like push, join etc.
//   console.log(typeof arguments);
//   return a+b;
// }
console.log(argumentsCheck(3, 4, 3, 3, 2, 3));

//Default parameters. We can set default values to each parameter, so if they are not passed then these values will be considered.
const defaultParams = (a = "Hello ", b = "", c = "!") => {
  return a + b + c;
};

console.log(defaultParams("Hi ", "XenOn"));

//we can also use this to set default value to a variable;
// let abb = abb || 3; //So if b will have any value it will stay the same if its empty then its value will be 3.

//callback functions
const callbackFunc = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};
callbackFunc(
  true,
  () => {
    console.log(true);
  },
  () => {
    console.log(false);
  }
);

//callback practice
const increment = n => n + 1;
const decrement = n => n - 1;
const square = n => n * n;

const allCalc = (n, calcType) => {
  return calcType(n);
}

console.log(allCalc(23, increment));
console.log(allCalc(23, decrement));
console.log(allCalc(23, square));

//Reduce - reduce the array and return a single value.
//syntax - arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
let thisArray = [2,5,23,12,34];
const reducerFunc = (accumulator, currentValue) => accumulator + currentValue;

const output = thisArray.reduce(reducerFunc, 100); //100 is the initial value in accumulator.
console.log(output);

//Practice
const newDevelopment = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];

let roomsStatus = newDevelopment.map((room) => {
  return room.rooms;
})
let emptyRoom = roomsStatus.filter((el,index) => {
  
  console.log(el[index])
})
// console.log(emptyRoom);