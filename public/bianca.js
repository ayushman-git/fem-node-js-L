//In object we store valeus as reference. Non-primited (objects) are stored as reference.
let anObj= {
  name: "Ayushman"
}
//Here it will be stored as a value. Primitive values are stored as value.
let sameName = anObj.name;
anObj.name = "Aman";
console.log(anObj.name);
console.log(sameName);

//.name will result into "A" because array is an object.
let arr = [];
//We use '.' notation when the variable name is a string literal, if it's digit we use []
//That's why we mostly use array with brackets because by default array index are digits.
arr.name = "A";
let who = arr.name;
console.log(arr)
//So we can use [] with objects as well.
console.log(anObj["name"])