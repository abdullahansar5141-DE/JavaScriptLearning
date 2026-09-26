//{curly braces} is basically scope
var c=300
let a=300
if(true)
{
//  let a =10
//  const b=20
    var c =30
//  console.log("INNER",a)
}
// console.log(a)
// console.log(b)
console.log(c)//this is the problem with var and why it is ignored

function one(){
    const username = "Abdullah"


    function two(){
        const website = "youtube"//closure child can access parent
        console.log(username)
    }
    //console.log(website)
    
    two()
}


//one()

if (true)
{
    const username="abdullah"
    if(username==="abdullah")
    {
        const website="youtube"
        console.log(username+website)
    }
    //console.log(website)
    
}
//console.log(username)

//#######################interesting example############################
console.log(add1(5))

function add1(num){
  return num+1
}

//console.log(add2(5))//error will be occurred hoisting for expression if func not defined previously
const add2=function(num){//func but sometimes also called expression
    return num+2
}

