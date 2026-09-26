function sayMyName()
{
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}


//sayMyName()


// function addTwoNumbers(number1,number2)//parameters
// {
//     console.log(number1+number2)
// }


function addTwoNumbers(number1,number2)//parameters
{
    // let result=(number1+number2)
    // return result//return kre baad kuch bhi print nhi hota
    return  number1+number2
}
// addTwoNumbers(3,"a")
// const result=addTwoNumbers(3,5)
// console.log(result)
//if sirf return krwarha console log nhi to kuch bhi nhi ayega


function LoggedIn(username="Abd")
{//if we didnt gaave any argument it will return undefined so to avoid this we use default
    return `${username} just logged in.`
}

console.log(LoggedIn())


//Func part 2
function calculateCartPrice(val1,val2,...num1)//rest operator
{
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))
//rest operator

const user={
    username:"Hitesh",
    price:199
}

function handleObj(anyobject)//function in combination with obj
{
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObj(user)
handleObj(
    {
        username:"sam", price: 399
    }
)

const myNewArray=[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));