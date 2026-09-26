let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())//WITH TIME
console.log(myDate.toLocaleDateString())//WITHOUT TIME
console.log(myDate.toLocaleTimeString())//ONLY TIME
console.log(typeof(myDate))

let myCreatedDate=new Date(2026,0,23,5,3)
console.log(myCreatedDate.toDateString())//months start from 0 in js in arrays
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toLocaleString())
let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())
console.log(Math.floor((Date.now())/1000))

let newDate = new Date()
console.log(newDate);


console.log(newDate.toLocaleString('default',{
    weekday:"long",
})
)

