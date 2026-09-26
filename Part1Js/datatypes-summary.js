//how data is accessed and placed in the memory
// Primitive(call by value: jb inko copy krte hain to address copy nhi hota) 
// string,number,boolean,null,undefined,Symbol,BigInt
// Reference type or Non primitive(call by reference) 
// Array
//Objects
// Functions
//JavaScript is dynamically typed


const id=Symbol("123")
const another_id=Symbol("123")
console.log(id==another_id)

const bigNum=3456789101112;


//object
let myObj={ 
    name:"Hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof(bigNum))


// Memory
//Stack(Primitive) memory and heap memory(Non Primitive)
let myYoutubename="abddotcom"
let anothername=myYoutubename
anothername="chai"
console.log(anothername)
console.log(myYoutubename)

let user1={
    email:"user@google.com",
    upi:"user@abc"
}
let user2=user1;
user2.email="abd@gmail.com"
console.log(user1)
console.log(user2)  