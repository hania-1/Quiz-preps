//intersection types
//its the 5e topic of sir zia's repository
//intersection tpe which holdes , interface and (&) , & use for combing multiple object types, or complex types
//and interface is used to define the shape of object 

//interface

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person{
    salary: number;
}

let emp : Employee = {
    name : "hania",
    age : 20,
    salary : 200
}

// "&"

type teacher = {
    income : number,
}

type student = {
    name : string,
    age : number,
    status : boolean
}

type person = teacher & student ;

let p : person ={
    name : "hania",
    age : 18,
    income : 2000,
    status : true

}


