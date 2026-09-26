//singleton only one of a kind
//Object.create
// symbols bnakr unko aam tarah se hum nhi add krskte as a key
mySym=Symbol("key1")


//object literals
const JsUser={
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"Abdullah@gmail.com",
    isLoggedin:false,
    lastLogindays:['Monday','Saturday'],
    //if we declare like this we cant use dot
    "Full Name":"Abdullah",
    //for symbol
    [mySym]:"mykey1"

}

//console.log(JsUser.email)
//console.log(JsUser['email'])
// console.log(JsUser.Full Name) error occuring
//accessing symbol
//console.log(JsUser[mySym])


JsUser.email="abd@gmail.com"
//console.log(JsUser.email)

//if we use object.freeze it will not allow you to change object completely
//Object.freeze(JsUser)
JsUser.email="abd1@gmail.com"
// console.log(JsUser)

JsUser.greeting=function(){
        console.log("Hello JS user.")
}

console.log(JsUser.greeting())
JsUser.greeting2=function(){
        console.log(`Hello JS user ${this.name}`)
}

console.log(JsUser.greeting2())