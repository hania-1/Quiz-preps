//its the topic 7a of sir zia's repo
//emums, when we have one property and we have to give multiple values in that propertie

enum color {
    blue1,
    black1,
    grey1
}
console.log(color) // ot : { '0': 'blue', '1': 'black', '2': 'grey', blue: 0, black: 1, grey: 2 }

// *** //

enum color1 {
    red,
    white,
    pink
}
let c : color1 = color1.red
console.log(c) //ot : 0

// *** //

enum color2 {
    red = 1,
    white,
    pink
}
let clr : string = color2[3]
console.log(clr) //ot : pink

// *** // 

enum color3 {
    red = 1,
    white = 4,
    pink = 8
}
let clrr : color3 = color3.white
console.log(clrr) //ot : 4

// *** //

enum color4 {
    red = 1,
    white = 4,
    pink = 8
}
let clrrr : string = color3[1]
console.log(clrrr) //ot : white



//this is 7b topic of sir zia's repo
//const enum , it is a bit same as enums , in the syntax we have to put const before enum

const enum color5 {
    red,
    white,
    pink
}
let rang : color5 = color5.red
console.log(rang) // ot : 0

// *** //

// const enum color6 {
//     red = 1,
//     white,
//     pink
// }
// let rang2 : string = color6[3]
// console.log(rang2) // it will through an error because it is a const enum and we can't change the value of the enum property in const enum 

// *** //

const enum color7 {
    red = 1,
    white = 4,
    pink = 8
}
let rang3 : color7 = color7.white
console.log(rang3) // ot : 4

