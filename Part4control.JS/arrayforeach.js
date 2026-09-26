const coding=["js","python","cpp","rubyonrails"]

// coding.forEach(function (item) {
//     console.log(item)

// })//callback func doesnot have a name

// coding.forEach((item)=> {
//     console.log(item)

// })

// function printMe(item)
// {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr)
// })
const myCoding=[{lang_name:"Javascript",langFile:"Js"},{lang_name:"python",langFile:"py"}]
myCoding.forEach((item)=>console.log(item.lang_name))