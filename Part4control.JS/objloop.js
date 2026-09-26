// const myObj={
//     js:"JavaScript",
//     cpp:"C plus plus"
// }
// for (const key in myObj){
// //console.log(key)
// //console.log(myObj[key])

// }

// //For In loop for arrays
// //arrays in js bhi obj hi hai bs inki keys num hotin or 0 se start hotin
// program=["cpp","pyth","js"]
// for(const key in program)
// {
//     //console.log(key)
//     console.log(program[key])
// }



const map=new Map()
map.set('IN',"India")
map.set('US',"USA")
map.set('IN',"India")

for (const key in map) {
console.log(key)    
}

//for objects for in and for arrays for of
//maps ke lie for in nhi use hota8


// Here’s a clear and concise explanation of the difference between for...in and for...of in JavaScript, with examples and edge cases.

// 1. for...in
// Purpose: Iterates over enumerable property keys (names) of an object.
// Works for objects and arrays, but returns keys/indexes, not values.
// Includes inherited enumerable properties from the prototype chain.

// 2. for...of
// Purpose: Iterates over values of an iterable (arrays, strings, Maps, Sets, etc.).
// Does not work directly on plain objects unless they are made iterable.