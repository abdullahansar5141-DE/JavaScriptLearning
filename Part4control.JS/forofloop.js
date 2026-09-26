// for of 
// ["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {//ctrl+ " " for inline suggestions
   // console.log(num)
}

const greetings="Hello World!";
for (const greet of greetings) {
//console.log(`Each char is ${greet}`)
    
}

//Maps is justlike an object but remembers the order 
const map=new Map()
map.set('IN',"India")
map.set('US',"USA")
map.set('IN',"India")

console.log(map)

for (const [key,value] of map) {
console.log(key,':-', value)    
}

const myObj = {
    game:'NFS',
    game2:'KFC'
}
// for (const [key,value] of myObj) {
//  console.log(key,':-', value)    
//  } doesnt work for objects