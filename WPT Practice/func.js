function f1()
{
    var a=25;
    console.log("Function called and running" +a)
    var a=30;
    console.log("Function called and running" +a)
    
}
f1();

let y=f1()
console.log(typeof(y))   // y holded the value of f1()

let x=f1
console.log(typeof(x))

