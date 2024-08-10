//Arrow function
// let ArrFun = ( name : string, age : number) => console.log (name + " " + age)
// ArrFun ("hania" , 18)
// //*** /
// //using "this" in arrow function
// let h = {
//     name : "hania",
//     age : 18,
//     class : 12,
//     show: function () {
// setTimeout( () => {
//     console.log (`my name is ${this.name}`)
// }, 2000)
//     }
// }
// h.show ()
var addnum = function (num1, num2) { return num1 + num2; };
//console.log(`addition of ${addnum}`)
console.log(addnum(2, 4));
