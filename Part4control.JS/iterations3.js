//Reduce method
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc+currval;
},0)//initial ek value deni prti acc ko
console.log(myTotal)


const shoppingCart=[{itemname:"js-course",price:2999},{itemname:"js1-course",price:3999},{itemname:"js-course",price:2999}]
const cartp=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(cartp)