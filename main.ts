//oops

//using type keyword in oops

type carType ={
  brand : string
  model : number
  color : string
}

let mycar :carType ={
   brand : "dalaa",
   model: 2022,
   color :" black"
}

console.log(mycar)

//using interface keyword in oops

interface Cartype {
    brand1 : string
    model1 : number
    color1 : string
}

class Mycar implements Cartype {
    brand1 : string = "Dalaa"
    model1 : number = 2022
    color1 : string = "white"
}
let Car = new Mycar
console.log (Car)

//displayDetails

let myclass ={
    stdname : "hania",
    rollno : 8,
    displayDetails : function (){
        return `stdname ${myclass.stdname}, rollno ${myclass.rollno}`
    }
}

console.log(myclass.displayDetails())

//displayDetails with class

class Car1 {
      public std1 = "Toyota";
      private rollno1 = "Corolla";
      public displayDetails() {
        return `std1 ${this.std1} rollno1 ${this.rollno1}`;
      }
    }

let myCar1 = new Car1 ();
//console.log(myCar1.rollno1) encapsulation methode