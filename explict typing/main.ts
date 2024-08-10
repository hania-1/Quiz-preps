//this is the second topic of sir zia's git repo
//explict typing which can change the unknown type to string or number or boolean

//explict typing

let myname : unknown = 'hania'
console.log ((myname as string).toUpperCase())
console.log ((myname as string).length)
console.log (myname)

// let someValue: any = "Hello"
// console.log ((someValue as number).length)

// let someValue: any = 123
// console.log ((someValue as string).length)

// let value: any = "123";
// let length: number = (value as string).length;
// console.log(length);

// let someValue: any = { x: 10, y: 20 };
// let value = <{ x: number, y: number }>someValue;
// console.log(value.x, value.y);