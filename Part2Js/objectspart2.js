//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLogged=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullName.userfullname);
//console.log(regularUser.fullName?.userfullname);//? helps
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4) //like arrays mai jo flat use kia tha ussi trah 
//.assign ke starting mai pehle target aata phir source source ek bhi hoskta ya 3 bhi jo pehla humne dia wohi target hoga
const obj3={...obj1,...obj2}
//console.log(obj3)

//When data from data base is being get it is in the form of arrays

const users =[
    {
        id:1,
        email : "h@gmail.com"
    },
        {
        id:2,
        email : "h2@gmail.com"
    },
        {
        id:3,
        email : "h3@gmail.com"
    }
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//Destructuring  of objects
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Abdullah"
}

//course.courseInstructor
// const {courseInstructor} = course //destructuring
// console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)