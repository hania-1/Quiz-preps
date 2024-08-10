//objects..
//fifth topic of sir zia's github repo
//objects, which make your code short and raedable, make your code in key value,like your cnic info.

//simple obj

let bio ={
    name : 'hania',
    class: 12,
    age : 18,
    status : false
}

console.log(bio)

//making obj a strong type, & using it as a type.

let info : {
    name1 : string ;
    rollno1 : number ;
    status1 : boolean;
}
info = {
    name1 : "hania",
    rollno1 : 123,
    status1 : false
}

console.log(info["status1"])

//making union literal in object

let infoo : {
    name2 : string ;
    rollno2 : number ;
    status2 : boolean;
    add : string | number 
}
infoo = {
    name2 : "hania",
    rollno2 : 123,
    status2 : false,
    add : "A-45C67"
}

console.log (infoo)

//nested obj

let myloves = {

    hobbies : {
        bikes : "kawasaki" ,
        boxing : "khabib"
    }, 
    happiness : {
        food : "pasta" ,
        song : " listens everything "
    },

}

console.log(myloves.happiness.food)

//unioun lit with nested obj


let lovess : {
    ilove : {
        bikes1 : string;
        boxing1 : string
    },
    myfav : {
        food1 : string ;
        song1 : string;
        judo : boolean | number;
    }
}


 lovess = {

    ilove : {
        bikes1 : "kawasaki" ,
        boxing1 : "khabib"
    }, 
    myfav : {
        food1 : "pasta" ,
        song1 : " listens everything ",
        judo : false //23,
    },

}

console.log(lovess.myfav.song1)

// //*****// //


let mycar = {
    color : 'blue',
    model : 'bmw',
    wheels : 4
}
console.log(mycar)

//using a function in objects

let mycar1 = {
    color : 'blue',
    model : 'bmw',
    wheels : 4,
    displayinfo :function() {
              console.log (`this is a car ${this.color} color , & the model is ${this.model} , with ${this.wheels} wheels`)
    }

}
//console.log(mycar1)
console.log(mycar1.color)
console.log(mycar1.wheels)
console.log(mycar1.model)
mycar1.displayinfo()

//using type alias in objects


type IMycar2 = { 
    color : string;
    model : string;
    wheels : number;  
}

let car : IMycar2 = {
    color : 'blue',
    model : 'bmw', 
    wheels : 4
}

console.log(car.color)


//using  structural typing in objects

type Iteacher = {
    name : string ,
    age : number,
    status : boolean
}

type Istudent = {
    name : string,
    age : number,
    rollno : number,
    status : boolean
}

let teacher : Iteacher = {
    name : 'hania',
    age : 18,
    status : false
}

let student : Istudent = {
    name : 'hania',
    age : 18,
    rollno : 123,
    status : false
}

 teacher = student 


// using type alias in nested objects

type Iauthor = {
    writter : string ,
    age : number,
    book  : {
        name : string,
        pages : number
    }
}

let author : Iauthor = {
    writter : "hania",
    age : 18,
    book : {
        name : "idk",
        pages : 123
    }
}
console.log (author)
