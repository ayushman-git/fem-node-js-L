//In object we store valeus as reference. Non-primited (objects) are stored as reference.
let anObj= {
  name: "Ayushman",
  age: 22
}
Object.keys(anObj).forEach ((name) => {
  console.log(name);
})
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
arr['age'] = 22;
let who = arr.name;
console.log(arr.length)
//So we can use [] with objects as well.
console.log(anObj["name"])

//
console.log(Array.isArray(arr));
arr.push(3)
console.log(arr.length);


//Practicing Objects
const diffObj = {};
diffObj.profile = {};
diffObj['profile']['perOne'] = { name: "Ayushman", age: 22 };
diffObj['profile']['perTwo'] = { name:"Aman", age: 21 };
diffObj.profile.perTwo.username = "XenOn";

console.log(diffObj);

//Practicing Arrays
const anotherArray = [];
anotherArray.push(2,3,2,7,1);
anotherArray.unshift("Unshift");
anotherArray.pop(); //removes last element
anotherArray.shift(); //removes first element
anotherArray[12] = 77;
anotherArray.name = "A";
anotherArray['age'] = 12;
console.log(anotherArray)
//Here we are freezing the array (an object) so we can't chagne the value in it.
Object.freeze(anotherArray);

//Destructuring (Arrays)
//In arrays order is important, so a will be assigned 10, b will be assigned 23 and so on.
const someArray = ["desX", "desY", "desZ"];
let [a,b,c,s,d] = [10,23,12,42];
console.log(a,b);
//Swapping values with destructuring
[a,b] = [b,a];
console.log(a,b)
let [x,y,z] = someArray;
let [po, , iu] = someArray; //We are leaving one sp
console.log(po, iu)
console.log(a, b, c, s, d); // Here d will be undefined because its not assigned a value
console.log(x, y, z);

//Destructuring (Objects)
const someObj = { somethingCool: "XenOn", anotherCoolThing: "Duoro"};
const randomObj = {
  "_id": "5f27a6fbd8c29e6fdd4db369",
  "index": 0,
  "isActive": false,
  "balance": "$2,373.07",
  "age": 40,
  "eyeColor": "blue",
  "name": "Dale Hart",
  "gender": "female",
  "company": "LYRIA",
  "email": "dalehart@lyria.com",
  "phone": "+1 (964) 528-2323",
  "address": "595 Degraw Street, Harrison, Tennessee, 2680",
  "latitude": 26.94436,
  "longitude": 117.72457,
  "tags": [
    "aliqua",
    "consequat",
    "est",
    "deserunt",
    "consectetur",
    "amet",
    "cillum"
  ],
  "add": [2,3,1,2,4,2,1,11]
}
let { q, w, e, r} = { q: {something: "Another Thing"}, w: {anotherThing: "Some Thing"}, e: 1, r: 10 };
let { somethingCool, anotherCoolThing } = someObj;
console.log(q, w, e, r);
console.log(somethingCool, anotherCoolThing)
//We can rename the variable name.
let { tags, latitude: lat, longitude: long } = randomObj; 
//We are using spread (...) operator to select everything else
let { _id: id, ...everythingElse} = randomObj;
console.log(lat, long, tags)
console.log(id, everythingElse)

//Loopping Arrays
function loopingThroughArraysInObj() {
  randomObj.tags.forEach((iteration) => {
    console.log(iteration)
  })
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
  'suspects': [
    {
      name: "A",
      color: "red color"
    },
    {
      name: "B",
      color: "green color"
    }
  ]
}

let [{ color: red}, { color: green}] = lol.suspects;
console.log(red, green);

function loopingExample() {
  for (let i = 0; i < lol.suspects.length; i++) {
    for (let keys in lol.suspects[i]) {
      console.log(keys);  
    }
  }
}
loopingExample();

function objInFunction(giveMeName) {
  return {
    someName: giveMeName,
    length: giveMeName.length,
    funcInObj() {
      console.log("Hello " + giveMeName);
    }
  }
}

let againAnArray = ["Ayushman", "Farket", "Suzy"];
let againArray = [];

againArray.forEach()

//Using forEach to populate variable from a function which is returning object.
// againAnArray.forEach((name) => {
//   againArray.push(objInFunction(name));
// })

// for (let i = 0; i < againAnArray.length; i++) {
//   againArray[i] = objInFunction(againAnArray[i]);
// }
console.log(againArray);