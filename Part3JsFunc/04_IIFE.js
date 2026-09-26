//Immediately Invoked Function Expressions
//1.immediately execute 2.Avoid hindrance from global pollution
(function chai(){
    console.log(`DB connected.`)
})();//()()IIFE whenever two iife func are used we have to put a semicolon  


(()=>{
    console.log(`DB2 connected.`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');//place for arguments


