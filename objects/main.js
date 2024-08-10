//objects..
//fifth topic of sir zia's github repo
//objects, which make your code short and raedable, make your code in key value,like your cnic info.
//simple obj
var bio = {
    name: 'hania',
    class: 12,
    age: 18,
    status: false
};
console.log(bio);
//making obj a strong type, & using it as a type.
var info;
info = {
    name1: "hania",
    rollno1: 123,
    status1: false
};
console.log(info["status1"]);
//making union literal in object
var infoo;
infoo = {
    name2: "hania",
    rollno2: 123,
    status2: false,
    add: "A-45C67"
};
console.log(infoo);
//nested obj
var myloves = {
    hobbies: {
        bikes: "kawasaki",
        boxing: "khabib"
    },
    happiness: {
        food: "pasta",
        song: " listens everything "
    },
};
console.log(myloves.happiness.food);
//unioun lit with nested obj
var lovess;
lovess = {
    ilove: {
        bikes1: "kawasaki",
        boxing1: "khabib"
    },
    myfav: {
        food1: "pasta",
        song1: " listens everything ",
        judo: false //23,
    },
};
console.log(lovess.myfav.song1);
// //*****// //
var mycar = {
    color: 'blue',
    model: 'bmw',
    wheels: 4
};
console.log(mycar);
//using a function in objects
var mycar1 = {
    color: 'blue',
    model: 'bmw',
    wheels: 4,
    displayinfo: function () {
        console.log("this is a car ".concat(this.color, " color , & the model is ").concat(this.model, " , with ").concat(this.wheels, " wheels"));
    }
};
//console.log(mycar1)
console.log(mycar1.color);
console.log(mycar1.wheels);
console.log(mycar1.model);
mycar1.displayinfo();
var car = {
    color: 'blue',
    model: 'bmw',
    wheels: 4
};
console.log(car.color);
var teacher = {
    name: 'hania',
    age: 18,
    status: false
};
var student = {
    name: 'hania',
    age: 18,
    rollno: 123,
    status: false
};
teacher = student;
var author = {
    writter: "hania",
    age: 18,
    book: {
        name: "idk",
        pages: 123
    }
};
console.log;
