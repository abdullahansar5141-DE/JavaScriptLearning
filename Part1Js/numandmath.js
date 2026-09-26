//nums
const score = 45
//console.log(score)
const balance= new Number(150)
//console.log(balance)

//console.log(balance.toString().length)
//console.log(balance.toFixed(2))//fixed krdega upto 2 decimal places

const otherNum= 23.8966
//console.log(otherNum.toPrecision(3))
//interestingly jitni usse precision kahenge utni hi krega
const anotherNum= 123.8966
//console.log(anotherNum.toPrecision(3));
const no3=1233.8966
//console.log(no3.toPrecision(3));

const hundreds=1000000
//console.log(hundreds.toLocaleString('en-PK'))

//console.log(Number.MAX_VALUE)
//console.log(Number.MIN_VALUE)

//+++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(-4.3))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)