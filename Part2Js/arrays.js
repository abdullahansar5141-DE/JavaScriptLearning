//arrays
const myArr=[0,1,2,3,4,5]
// console.log(myArr[0])
//shallow copies bnata hai mtlb same reference point same hoga
// const myHeros=['abd','adc','anm']
// const myArr2=new Array(1,2,3,4)
// myArr.push(6)//simply pushes 6 to the array
// console.log(myArr)
// myArr.pop(6)//removes last value
// console.log(myArr)
 myArr.unshift(9)

// myArr.shift()// to remove first element of array
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(0))

// const arrS=myArr.join()
// console.log(typeof(arrS))//.join converts to string

//slice,splice
 console.log("A ",myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)
const myn2=myArr.splice(1,3)
console.log(myn2)
//splice original array ko bhi manipulate krdeta
console.log("C ",myArr)//or dusra ye ke splice mai starting pos hoti phir second one hoti haike kitne elements row mai uthane(1,3 means ke 1 se shuru kro or 3 elements uthao)
//ek or cheez ke splice se original array manipulate krjaati hai kyunke const sirf uska address contain krwarha hota