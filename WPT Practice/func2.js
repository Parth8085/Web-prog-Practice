//parameterised function

function add (a,b,c)
{
   console.log("The sum of both numbers will be" +(a+b+c))
}
add(3,5,10)
add (2,5,6,7)



//by using lambda function
let mynew =(a,b)=> a*b;
let result=mynew(5,5)
console.log(result)