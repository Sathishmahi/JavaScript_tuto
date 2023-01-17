//normal function 
function isEven(num){
    // return num%2==0?true:false; 
    return num%2===0;
}



//arrow function (=>)
var isEven_arrow=(num)=>{
    // return num%2==0?true:false; 
    return num%2===0;
}
// console.log(isEven_arrow(3));

var result=[2,4,6,8,9].every(isEven_arrow);//referance to normaal function
console.log(result);

//call back ()=>{} function with  return statement
var result=[2,4,6,8,9].every((e)=>{//referance to call back function (is a function but does not have a any name only logic or content have contain )
    return e%2===0;
});
console.log(result);


//call back function without  return statement ()=>
var result=[2,4,6,8,9].every((e)=>e%2===0);
console.log(result);
