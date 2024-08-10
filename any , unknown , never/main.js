//this is the 5f topic of sir zia's github repo
//any , unknown , never
/*in any any value can be assigned to any variable, it will not show any error , but it will not show error where it have to show error,and
it will of typechecking.
unknown type can also put any value in it, but you can not put methods in unknown, never represents a value never accure , its use in functions
that never return */
//any
var myname = "hania";
myname = false;
console.log(myname.toUpperCase());
//in here i assigned a boolean value to myname and it will not show error because it is of type any
//umknown
var myname1 = "hania";
// console.log(myname1.toUpperCase()) //here it gives error
myname1 = 10;
myname1 = false;
//here i put right methode with right type but it gives error because it is of type unknown
// let value: any = "TypeScript";
// value = 123;
// console.log(value);
var value = "TypeScript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
