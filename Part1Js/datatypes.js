"use strict"; //treat all JS code as newer version
//alert(3+3) we are using node js not browser

//number:2 raised to power 53
//bigint
//string " "
//boolean
//null stand alone value
//undefined
//symbol uniqueness

//object
// console.log(typeof("ABD"))
// console.log(typeof(null))//ye object hai

//Datatype conversion
//let score = "33"
let score="33abc"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)// WHEN STRING EQUIVALENT TO NUMBER will give NaN

let a=null
let b=Number(a)
console.log(b)//will give 0 instead of null

let c=undefined
let d=Number(c)
console.log(b)//will give 0 instead of undefined

 let isLoggedIn="Hitesh"

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1 true 0 false hitesh true
let someNumber = 33
let stringNum=String(someNumber)
console.log(stringNum)
console.log(typeof(stringNum))

//****************************************Operations********************************************
let value=3;
let negVal=-value;
console.log(negVal)
//console.log(2**2)
let str1="Hello"
let str2=" Abdullah"
let str3 = str1 + str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1" + 2 + 2)
console.log(1+2+"2")
console.log(true)
console.log(+true)//gives 1
// console.log(true+);//error
console.log(+"")
let num1,num2,num3
num1 = num2 = num3 =2+2;
let gameCounter = 100;
gameCounter++;
console.log(gameCounter)
