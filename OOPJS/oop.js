const user={
 username:"Abdullah",
 loginCount:8,
 signedIn:true,

 getUserDetails:function(){
    console.log("Got user details from database.")
    console.log(`Username:${this.username}`);
 }
}
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne=new User("abdullah",12,true);
const userTwo =new User("Chai aur code",11,false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor)

// console.log(user.username);
// user.getUserDetails();
// console.log(this)

