let arr=[2,4,10,3,5,8]
let sqrarr=arr.map((e)=>e*e)
console.log("Square Array" +sqrarr)

// let c=arr.toString()
// console.log(c)

let arr2=["green","black","yellow","white"]
console.log(arr2.map(ele=>ele.substring(0,2).toUpperCase()));
console.log(arr2.map(ele=>ele.substring(2,3).toLowerCase()));