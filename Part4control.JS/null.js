//Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//kbhi kabar jb database se values li jaatin hain to null ajaatin thatswhy ye operator use krte null ko chor kr dusri value pick krega or agr koi null nhi to first wali assign krdega
val1 = null ?? 10 ?? 100
console.log(val1)


//ternary operator 

//condition?true:false

const icedTeaPrice = 100;
(icedTeaPrice>=80) ? console.log("more than 80."): console.log("less than 80.")