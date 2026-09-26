const name="aLI"
const repoCount=50
console.log(name+repoCount)

//Back ticks
console.log(`Hi my name is ${name}`)//string interposition


const gameName=new String("Abdull-ah-abd")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('b'))


// const newString = gameName.substring(0,4)
// console.log(newString)
const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="  abdullah  "
console.log(newStringOne.trim())//starting and end spaces are removed

const url="https://abd.com/hitesh%20choudhary";
console.log(url.replace("%20",'--'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))