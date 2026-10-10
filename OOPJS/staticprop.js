class User{
    constructor(username){
        this.username=username;

    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){
        return `123`;
    }
}

const abd = new User("Abd");
// abd.createId()
// console.log(User.createId()); related to class
class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}

const iphone= new Teacher ("Iphone","Iphone@");
