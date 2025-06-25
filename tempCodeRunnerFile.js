// ------------------------ Bigint

// using n suffix

let n1 = 120398120380128390n;
console.log(n1);

// using BigInt constructorr

let big2 = BigInt("21323123123123123123");
console.log(big2);

let normal = 129038129038;
console.log(normal + 1);
console.log(normal + 2);

let big = 1239810198231n;
console.log(big + 1n);


// -----------
console.log(typeof null) // -> object
console.log(typeof NaN) //  -> number
console.log(typeof undefined) // -> undefined
console.log(typeof BigInt) // -> function
console.log(typeof unknown) // -> undefined


// -----------variable Scopes


// var function scope

function abc(name){
    if(typeof name === 'string'){
        var a = 10;
    }
    console.log(a);
}

// console.log(a); -> undefined 

// -> let and const are only block scope only be accessible where they declare 
var age = 18;
if(age > 15){
    let b = 13;
    console.log(b);
}
// console.log("The b value is:",b) -> b in not defined

// const immutable for primitive and mutable for objects

const a = 13; // -> the initialization must be with declatration

// const c;
// c = 200;

console.log("The const a value is:",a);



// ------------------------Hoisting 


console.log("The variable of type var is:",variable);
var variable = 20;
// behind the scene

var variable;

console.log("The variable of type var is:",variable);
variable = 20;

console.log("4"+2/2); // -> 40

{
    console.log("Inside the bloack the value of variable is:",variable);
    var age = 21;
}

console.log("The value of age is: ",age);

// console.log("The marks of ali are:",marks);
// console.log("Asslam Alaikum");
// console.log("Walaikum slam");
// const z = 100;
// temopral dead zone bw 86 to 89
// when let and const hoisted



// ----------------------------- Clousre
// when the inner function remembers and have the access of all the variables of outer

function outer(){
    var name = "Ali";
    var age = 18;
    function inner(){
        console.log("The name is:"+name);
        console.log("The age is:"+age);
    }

    return inner;
}

const greet = outer();
greet();


// playing with this

// this referes to the current object currently executing in the JS document this means window

console.log(this);

printwindow = ()=>{
    console.log(this);
}
printwindow(); // ->{}


const user = {
    name:"Ali Hassan",
    greet(){
        console.log("This is the full name ",this.name);
    }
}
user.greet();

const user2 = {
    name:"Shoaib",
    greet: ()=>{
        console.log("The second name is:",this.name); // -> Lexical
    }
}

user2.greet(); // -> undefined


// -------------event  loop this will do
// call stack for synchronus
// microtask queuer for promise
// callback queue for setTimeout fetch etc
console.log("Start");

setTimeout(function(){
    console.log("Hello")
},1000);

Promise.resolve().then(()=>{
    console.log("message");
})
console.log("End");









let promise1 = new Promise((resolve,reject)=>{
    let abc = "promise";
    if(typeof abc === 'string')
        resolve("Promise bn gya.")
    else
        reject("Error hai bhai");
})

promise1.then((message)=>{
    console.log("The first message is: "+ message);
    return "First k baad wala."
}).then((message)=>{
    console.log("The second message is: " + message);
    return "Third message is."
}).then((message)=>{
    console.log("The third is: "+message);
}).catch((error)=>{
    console.error("the error is: "+error);
})




let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("The print is print.")
    },2000)
    resolve(1);
});


let promise3 = new Promise((resolve,reject)=>{
    // function one(){
    //     console.log("This is one,")
    // }
    // setTimeout(one,1000);
    // setTimeout(resolve,1000,"first");
})
let promise4 = new Promise((resolve,reject)=>{
    // function two(){
    //     console.log("This is two.")
    // }
    // setTimeout(two,2000);

    // setTimeout(resolve,2000,"second")
})

let promise5 = new Promise((resolve,reject)=>{
    // function three(){
    //     console.log("This is three.")
    // }
    // setTimeout(three,5000);
    // setTimeout(resolve,3000,"Third")
})

Promise.all([promise3,promise4,promise5])
.then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log("The error is:",error);
})










