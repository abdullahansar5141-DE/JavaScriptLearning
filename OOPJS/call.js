function SetUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password)
{
    this.email=email;
    SetUsername.call(this,username);
    
   
    this.password=password;
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai)