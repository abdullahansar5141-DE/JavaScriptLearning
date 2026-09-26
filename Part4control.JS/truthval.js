//true values
//function(),{},[]," ",'false',"0"
//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//for string we can put directly but for arrays we have to check thisway
const username=[]
if(username.length === 0)
{
    console.log("Array is empty.")
}
const username2="Ali"
if(username)//can be directly
{
    console.log("String is filled.")
}
//for objects
const emptyObj = {}
if(Object.keys(emptyObj).length===0)
{
    console.log("Obj is empty")
}