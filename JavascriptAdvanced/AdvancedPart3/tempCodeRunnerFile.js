const promise1=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed.");
        resolve()//important for connecting
    },1000)

})
promise1.then(function(){
    console.log("Promise consumed.")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2.")
        resolve()
    }
    ,1000)
}).then(function(){
    console.log("Async2 Resolved.")
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function()
    {
       resolve({username:"Chai",email:"abd@exp.com"})//mostly objects are passed but we can also pass other things
    } , 1000)
})

promise3.then(function(user){
  console.log(user)
})


const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error) {
            resolve({username:"abd",password:"343"})
        }
        else
            reject('ERROR: Something went wrong.')
    },1000)

})

promise4.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{console.log(username)})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("finally the promise is either resolved or rejected."))//finally works as default in every situation


const promise5=new Promise(function(resolve,reject){
        setTimeout(function(){
        let error=true;
        if(!error) {
            resolve({username:"javascript",password:"343"})
        }
        else
            reject('ERROR: Js went wrong.')
    },1000)
})

async function consumePromise5(){
 try{
    response = await promise5;
    console.log(response)
 } catch(error){
    console.log(error)
 }
}

consumePromise5()


// async function getAllUsers(){
//     try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data)
// }
// catch(error)
// {console.log("E: ", error);
// }
// }
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))