/**
 * Variables
 */

// Declare two variables;
var age;
let name;

// Uncomment and run to see the error;
// const weight;
// console.log('Line 11', age, name, weight);

const weight = 50;
console.log('Line 14', age, name, weight);

// var and hoisting;
// gender will show undefined because it is declared after the console.log and var is hoisted;
console.log('Line 18', age, name, weight, gender);
var gender = 'other';

// let and hoisting;
// Uncomment and run to see the error;
// genre will throw an error because it is declared after the console.log and let (and const) is not hoisted;
// console.log('Line 24', age, name, weight, gender, genre);
// let genre = 'rock';

/**
 * Data types
 */

// Primitive data types;
// There are 6 Primitive data types in JavaScript;

// Declare a variable with a string value;
var string = 'This is a string';
let string2 = 'This is also a string';
const string3 = `This is also a string`;
console.log('Line 38', typeof string, typeof string2, typeof string3);

// Declare a variable with a number value;
var number = 10; // integer
let number2 = 10.5; // float
const number3 = 10e5; // exponential
console.log('Line 44', typeof number, typeof number2, typeof number3);

// Declare a variable with BigInt value;
var bigInt = 10n;
let bigInt2 = 10n;
const bigInt3 = 10n;
console.log('Line 50', typeof bigInt, typeof bigInt2, typeof bigInt3);

// Declare a variable with a boolean value;
var boolean = true;
let boolean2 = false;
const boolean3 = true;
console.log('Line 56', typeof boolean, typeof boolean2, typeof boolean3);

// Declare a variable with undefined value;
var undefinedVar;
let undefinedVar2;
// const undefinedVar3; // 'const' declarations must be initialized.
console.log('Line 62', typeof undefinedVar, typeof undefinedVar2);

// Declare a variable with a Symbol value;
var symbol = Symbol('symbol');
let symbol2 = Symbol('symbol');
const symbol3 = Symbol('symbol');
console.log('Line 68', typeof symbol, typeof symbol2, typeof symbol3);

// Non-primitive data types;
// There are 3 Non-primitive data types in JavaScript, they are Object, Array and Function;

// Objects
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// Declare a variable with an object value;
var object = { name: 'John', age: 30 };
let object2 = { name: 'John', age: 30 };
const object3 = {
  name: 'John',
  age: 30,
  greet: function () {
    return 'Hello';
  },
};
const object4 = {}; // empty object
console.log(
  'Line 86',
  typeof object,
  typeof object2,
  typeof object3,
  typeof object4
);
console.log(
  'Line 93',
  object3.name,
  object3.age,
  object3.greet,
  object3.greet()
);
console.log(
  'Line 100',
  object3['name'],
  object3['age'],
  object3['greet'],
  object3['greet']()
);

// Arrays
// An array is a special type of object. The values are numerically indexed. Arrays are zero-based, meaning that the first element of an array is at index 0. The last element in the array is at the index equal to the value of the length property minus 1. Arrays use to store multiple 'related' values in a single variable;
// Declare a variable with an array value;
var array = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
const array3 = [1, 'a', true, { name: 'John', age: 30 }, [1, 2, 3, 4, 5]];
console.log('Line 114', typeof array, typeof array2, typeof array3);
console.log(
  'Line 115',
  typeof array[0],
  typeof array2[0],
  typeof array3[2],
  typeof array[6]
);

// Functions
// Note: Functions are objects in JavaScript; But typeof function returns 'function'.
// A function is a JavaScript set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
// Declare a variable with a function value;
var functionVar = function () {
  return 'Hello';
};
let functionLet = function () {
  return 'Hello2';
};
const functionConst = function () {
  return 'Hello3';
};
console.log(
  'Line 136',
  typeof functionVar,
  typeof functionLet,
  typeof functionConst,
  typeof functionVar(),
  typeof functionLet(),
  typeof functionConst()
);

// Hoisting and function declaration;
console.log('Line 147', hoistedFunction());
function hoistedFunction() {
  return 'HoistedFunction';
}

console.log('Line 152', hoistedFunction2);
// console.log('Line 153', hoistedFunction2()); // hoistedFunction2 is not a function
var hoistedFunction2 = function () {
  return 'HoistedFunction2';
};

// Date object;
const newDate = new Date();
console.log('Line 160', newDate, typeof newDate);

/**
 * Operators
 */

// Arithmetic operators:  +, -, *, /, %, **;
// Examples:
console.log('Line 166', 10 + 5, 10 - 5, 10 * 5, 10 / 5, 10 % 5, 10 ** 5);

// Increment and decrement operators: ++, --;
// Examples:
var increment = 10;
increment++;
console.log('Line 170', increment);
increment--;
console.log('Line 172', increment);
console.log('Line 173', increment++); // 10
console.log('Line 174', ++increment); // 12

// Assignment operators: =, +=, -=, *=, /=, %=, **=;
// Examples:
var assignment = 10;
assignment += 5; // assignment = assignment + 5;
console.log('Line 179', assignment);
assignment -= 5; // assignment = assignment - 5;
console.log('Line 181', assignment);
assignment *= 5; // assignment = assignment * 5;
console.log('Line 183', assignment);
assignment /= 5; // assignment = assignment / 5;
console.log('Line 185', assignment);
assignment %= 4; // assignment = assignment % 5;
console.log('Line 187', assignment);
assignment **= 4; // assignment = assignment ** 5;
console.log('Line 189', assignment);

// String operators: +;
// Examples:
var stringOperator = 'Hello' + ' ' + 'World';
console.log('Line 193', stringOperator);

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=;
// Examples:
console.log('Line 203', 10 == 10, 10 == '10', 10 === 10, 10 === '10');
console.log('Line 204', 10 != 10, 10 != '10', 10 !== 10, 10 !== '10');
console.log('Line 205', 10 > 10, 10 > '10', 10 < 10, 10 < '10');
console.log('Line 206', 10 >= 10, 10 >= '10', 10 <= 10, 10 <= '10');

// Logical operators: &&, ||, !;
// Examples:
console.log('Line 210', 10 == 10 && 10 == '10');
console.log('Line 211', 10 === '10' || 10 == '10');
console.log('Line 212', !(10 === '10'));

// Type operators: typeof;
// Examples:
console.log('Line 216', typeof 10, typeof '10', typeof true, typeof undefined);
console.log('Line 217', typeof { name: 'John' }, typeof [1, 2, 3, 4, 5]);
console.log('Line 218', typeof function () {}, typeof null);

// Operator precedence:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Examples:
console.log('Line 223', 10 + 5 * 2);
console.log('Line 224', (10 + 5) * 2);
console.log((5/5)+(1*17)-2);
console.log(5 / 5 + 1 * 17 - 2);

// Ternary operator: ?  :;
// Examples:
var ternary = 10 > 5 ? '10 is greater than 5' : '10 is not greater than 5';
console.log('Line 229', ternary);
// Chaining ternary operators;
var chainingTernary =
  10 > 5
    ? '10 is greater than 5'
    : 10 < 5
    ? '10 is less than 5'
    : '10 is equal to 5';
console.log('Line 232', chainingTernary);




