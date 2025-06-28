// Types 

import { c } from "vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";

var str: string = "Ali Hassan";
console.log(str);
var number: Number = 13;
console.log(number);
var bool: boolean = false;
console.log(false);


var a: number = 10;
var b: number = 12;
b = a;
b = 133;

console.log(a);
// no change in the parent

var obj = {
    name: String = 'Ali Hassan'
}
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
    } else {
        console.log(item);
    }
}


// using the for of loop


console.log("This is using for of loop.")
for (let item of arr2) {
    if (typeof item === 'object' && item !== null && item === 'function') {
        item.greet();
    }
    console.log(item)
}



// binding the arrays to store the same ata
let arr4: number[] = [1, 2, 3];
console.log(arr4);


let arr5: string[] = new Array("hello", "what was that");
console.log(arr5);

let arr_new = new Array(5);

// Tuples

let tup1: [number, string, boolean] = [1, "Ali", false];
console.log(tup1);



// Emums

enum Direction {
    UP = "This is UP",
    DOWN = "This is DOWN"
}

let move: Direction = Direction.UP;
console.log(move)


enum Colors {
    red = "This is red",
    black = "This is black color"
}

let col: Colors = Colors.red
console.log("The color value is: ", col)





let acc: number;
acc = "ali";

let abb: number;
abb = 'string';


let u: unknown;

u = 'alihassan';
u = 12;
if (typeof u === 'string') {
    u.length
}


// functions

function abc(): void {
    console.log("Hello void")
}
function sum(a: number, b: string): string {
    return a + b;
}

let result = sum(5, "5");
console.log(result);

let dd = null
let ddd: null = null
console.log(ddd);
console.log(typeof null)





// inference means no need to tell the type

let axz = 12;

let axd: number;


// using union

let variable: number | string | boolean;

variable = 12;
console.log(variable)
variable = "string";
console.log(variable);
variable = false;
console.log(variable);

function greeting = (name: string | any): void => {

    console.log(`The name is: ${name}`)

}

greeting();


function greeting2(age: number, name: string): void {
    console.log("The age is:", age);
    console.log(`The name is: ${name}`);
    name.length;
    age.toFixed;
}

greeting2(18, "ali");

interface USER {
    name: string,
    email: string,
    age: number
}

function printobj(obj: User) {
    console.log(obj.name)
    console.log(obj.email)
    console.log(obj.age)
}
printobj({ name: "Ali", email: "asdas", age: 13 })


// extending interfaces

interface user2 {
    name: string,
    email: string,
}

interface admin extends user2 {
    token: string
}


function printadmin(admin: admin) {
    console.log(admin.name)
    console.log(admin.email)
    console.log(admin.token)
}

printadmin({ name: "ali", email: 'asdas', token: '213m,asndlkj213' });


type my_type = number | string
type my_type2 = number | string | boolean
let ble: my_type2 = 12;
ble = "alihassan";
ble = false;
console.log(ble)
let vari: my_type
vari = 12
console.log(vari);


// intersection types join krna 

type Person = {
    name: string
}
type Employee = {
    empid: number
}

type empdetails = Person & Employee;

let obje: empdetails = {
    name: "Ali Hassan",
    empid: 1234
}

for (let i in obje) {
    let key = i as keyof typeof obje;
    console.log("The key is:", key, "And value is: ", obje[i]);
}




// Generics

function printing<T>(value: T) {
    console.log("The value is:", value);

}

printing<string>("ali");

function log<T>(msg: T): void {
    console.log(msg);
}

log<string>("Hello");
log(1);

interface use<T> {
    name: 'ali',
    email: 'alihasan'
    token: T
}

function printUser(obj: use<string>) {
    for (let index in obj) {
        let key = index as keyof typeof obj;
        console.log("the index is:", index, "the value is:", obj[index]);
    }
}
printUser({ name: "Ali", email: "Ali Hassan", token: 'aslkdjaskd' });


function un<T>(value: T): T {
    return <T>"12";
}

let result2 = un<string>("Hello");
console.log(result2);





// Assertion

let somevalue: string = "alihassan";
(somevalue as string).length


let num4: number = 10;
(num4 as string).length

// let num5: any;
// (num5 as number).toFixed
// (num5 as boolean).

let varr: any = "Ali";
(<string>varr);
console.log(varr);



let numb: any = 12;
(<string>numb);
console.log(numb);


let a_number: number = 12;

// let a_string_number = String(a_number);
// console.log(typeof a_string_number);


// typeguads


class remotetv {
    switchof() {
        console.log("Tv switched off.")
    }
}
class cartv {
    switchof() {
        console.log("Car off")
    }
}

function pressremotebutton(device: remotetv | cartv): string {
    if (device instanceof remotetv) {
        device.switchof();
    } else {
        device.switchof();
    }
}

let device1 = new remotetv();
let device2 = new cartv();
let resultd = pressremotebutton(device1);
let resultdd = pressremotebutton(device2);


// passing props in react using ts
let nama = "ab";

type Props = { title: string }
const Card = ({ title: Props }) => {
    return (
        <div>
        ${nama}
        </div>
    )
}