"use strict";
// Types 
Object.defineProperty(exports, "__esModule", { value: true });
var str = "Ali Hassan";
console.log(str);
var number = 13;
console.log(number);
var bool = false;
console.log(false);
var a = 10;
var b = 12;
b = a;
b = 133;
console.log(a);
// no change in the parent
var obj = {
    name: String = 'Ali Hassan'
};
// let obj2 = obj;
// obj2.name = "Shoaib"
// console.log(obj.name);
// premitive
let arr = [1, 2, 3, 4, 5, false, "Ali hassan"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let arr2 = [
    "ali",
    false,
    null,
    undefined,
    { x: 12 },
    { gree: function () { console.log("hello from for...in"); } }
];
for (let i in arr2) {
    const item = arr2[i];
    if (typeof item === "object" && item !== null && typeof item.gree === "function") {
        item.gree();
    }
    else {
        console.log(item);
    }
}
// using the for of loop
console.log("This is using for of loop.");
for (let item of arr2) {
    if (typeof item === 'object' && item !== null && item === 'function') {
        item.greet();
    }
    console.log(item);
}
// binding the arrays to store the same ata
let arr4 = [1, 2, 3];
console.log(arr4);
let arr5 = new Array("hello", "what was that");
console.log(arr5);
let arr_new = new Array(5);
// Tuples
let tup1 = [1, "Ali", false];
console.log(tup1);
// Emums
var Direction;
(function (Direction) {
    Direction["UP"] = "This is UP";
    Direction["DOWN"] = "This is DOWN";
})(Direction || (Direction = {}));
let move = Direction.UP;
console.log(move);
var Colors;
(function (Colors) {
    Colors["red"] = "This is red";
    Colors["black"] = "This is black color";
})(Colors || (Colors = {}));
let col = Colors.red;
console.log("The color value is: ", col);
let acc;
acc = "ali";
let abb;
abb = 'string';
let u;
u = 'alihassan';
u = 12;
if (typeof u === 'string') {
    u.length;
}
// functions
function abc() {
    console.log("Hello void");
}
function sum(a, b) {
    return a + b;
}
let result = sum(5, "5");
console.log(result);
let dd = null;
let ddd = null;
console.log(ddd);
console.log(typeof null);
// inference means no need to tell the type
let axz = 12;
let axd;
// using union
let variable;
variable = 12;
console.log(variable);
variable = "string";
console.log(variable);
variable = false;
console.log(variable);
function greeting() { }
(name) => {
    console.log(`The name is: ${name}`);
};
greeting();
function greeting2(age, name) {
    console.log("The age is:", age);
    console.log(`The name is: ${name}`);
    name.length;
    age.toFixed;
}
greeting2(18, "ali");
function printobj(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.age);
}
printobj({ name: "Ali", email: "asdas", age: 13 });
function printadmin(admin) {
    console.log(admin.name);
    console.log(admin.email);
    console.log(admin.token);
}
printadmin({ name: "ali", email: 'asdas', token: '213m,asndlkj213' });
let ble = 12;
ble = "alihassan";
ble = false;
console.log(ble);
let vari;
vari = 12;
console.log(vari);
let obje = {
    name: "Ali Hassan",
    empid: 1234
};
for (let i in obje) {
    let key = i;
    console.log("The key is:", key, "And value is: ", obje[i]);
}
// Generics
function printing(value) {
    console.log("The value is:", value);
}
printing("ali");
function log(msg) {
    console.log(msg);
}
log("Hello");
log(1);
function printUser(obj) {
    for (let index in obj) {
        let key = index;
        console.log("the index is:", index, "the value is:", obj[index]);
    }
}
printUser({ name: "Ali", email: "Ali Hassan", token: 'aslkdjaskd' });
function un(value) {
    return "12";
}
let result2 = un("Hello");
console.log(result2);
// Assertion
let somevalue = "alihassan";
somevalue.length;
let num4 = 10;
num4.length;
// let num5: any;
// (num5 as number).toFixed
// (num5 as boolean).
let varr = "Ali";
varr;
console.log(varr);
let numb = 12;
numb;
console.log(numb);
let a_number = 12;
// let a_string_number = String(a_number);
// console.log(typeof a_string_number);
// typeguads
class remotetv {
    switchof() {
        console.log("Tv switched off.");
    }
}
class cartv {
    switchof() {
        console.log("Car off");
    }
}
function pressremotebutton(device) {
    if (device instanceof remotetv) {
        device.switchof();
    }
    else {
        device.switchof();
    }
}
let device1 = new remotetv();
let device2 = new cartv();
let resultd = pressremotebutton(device1);
let resultdd = pressremotebutton(device2);
// passing props in react using ts
let nama = "ab";
const Card = ({ title: Props }) => {
    return $;
    {
        nama;
    }
    /div>;
};
