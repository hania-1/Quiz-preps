//function
//so its the topic 9a of sir zia's git repo
//functions which help to make your code easy , and not to make your code look "dry" means not to repeat its self

//simple function

function greet () {
    console.log ("hello")
}
greet ()

// ***//***

function add (a : number , b : number ) {
    return a + b
}

console.log (add (2 , 3))

//FUNCTION DEFAULT PARAMETER

function simplesen (name : string , mymess : string = "welcome") {
    

    return `hi ${name} ${mymess}`
}
console.log (simplesen("sufi"))

//FUNCTION OPTIONAL PARAMETER

  function bio (name : string , age? : number ) {
    
         console.log (`my name is ${name} & my age is ${age}`)
    
}
//bio ("sufi")
bio ("sufi" , 22)

// FUNCTION REST PARAMETER

function add2 ( ...d : number []) {
console.log(d)
}

add2 ()

function add3 (a : number , b : number , c : number , ...d : number []) {
    return a + b + c
}
console.log (add3 (2 , 2, 2))

//FUNCTION OVERLOAD PARAMETER

function fav (a : string , b : string) : string ;
function fav (a : number , b : number ) : number ;
function fav (a : boolean , b : boolean) : boolean

function fav (a : any , b : any) : any {
    return  [a , b]
}

console.log (fav ("hiba "  ,  " sufi"))
console.log (fav (7 , 1))
console.log (fav ( false , false))




































// function greet(name: string): string;
// function greet(times: number): string;
// function greet(value: any): string {
//   if (typeof value === 'string') {
//     return `Hello, ${value}`;
//   } else {
//     return `Hello, you called me ${value} times`;
//   }
// }
// console.log(greet("John"));

// function calculate(x: number): number;
// function calculate(x: string): string;
// function calculate(x: any): any {
//   if (typeof x === 'number') {
//     return x * x;
//   } else {
//     return `Square of ${x}`;
//   }
// }

// console.log(calculate(5));

// function concat(a: string, b: string): string;
// function concat(a: string, b: number): string;
// function concat(a: any, b: any): string {
//   return a.toString() + b.toString();
// }
// console.log(concat("Hello", 123));

// function process(value: string): string;
// function process(value: number): number;
// function process(value: any): any {
//   return value;
// }
// console.log(process("test"));

// function area(shape: 'circle', radius: number): number;
// function area(shape: 'square', side: number): number;
// function area(shape: any, dimension: any): number {
//   if (shape === 'circle') {
//     return Math.PI * radius * radius;
//   } else if (shape === 'square') {
//     return side * side;
//   }
// }
// console.log(area('circle', 5));

function describe(value: string): string;
function describe(value: number): string;
function describe(value: any): string {
  return `Value is ${value}`;
}
console.log(describe(42));