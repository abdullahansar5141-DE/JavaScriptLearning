//This keyword tells about current context
const user={
    username:"Abd",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
        //console.log(this)
    }
}

// user.welcomeMessage()//bcz its a method
// user.username="Sam;"
// user.welcomeMessage() //objects are non primitive mtlb jo change kroge wo poore obj mai change hojaega or agr isse rokna ho to object.freeze use krte
//console.log(this)//in node environment this will be empty because global environment has nothing
//global object in browser is windows but in node it is empty

// function chai(){
//     let username="Abd"
//     console.log(this.username) //this works only in objects not in func
// }

// chai()
//now no need of func keyword
const chai=()=>{
let username="Abd"
    console.log(this.username) //this works only in objects not in func// arrow apne global scope ke this ki trf point krta
 }
//arrow func ()=>
// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// const addTwo =(num1,num2) => num1+num2 //no need of return statement
//const addTwo =(num1,num2) => (num1+num2)//implicit return
const addTwo =(num1,num2) => ({username:"Hitesh"})// parenthesis imp for obj
console.log(addTwo(3,4))
