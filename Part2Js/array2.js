const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','ironman']
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])
// const allHeros=marvel_heros.concat(dc_heros)//concat returns the new array
// console.log(allHeros)
// const all_new_heros=[...marvel_heros,...dc_heros]//spread operator
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)//flats all the 
// console.log(real_another_array)
// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Hitesh"})) //nteresting jb objects ko arrays mai convert krte to btana prta ke keys ki ya values ki

let score1 = 100,score2=200,score3=300;

console.log(Array.of(score1,score2,score3));



// This uses the REST operator to unpack the array
const [Firstplace, ...new1] = marvel_heros; 

console.log(Firstplace); 


console.log(new1); 
