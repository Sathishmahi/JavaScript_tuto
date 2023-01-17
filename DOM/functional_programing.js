/**
 rules of functional programming

1.always to separate variables and function 
ex.var d=10;
function add(d){
    return d+100;
} 

2.always to use separate var names

ex.
num=10;
num_1=20;
num_2=210;


3.to store a function into var 

ex.
 var demo=function(some){
    return some
 }
 */



var demo=function(firstName){
    return `Hi ${firstName}`
}

var demo1=function(d){
    return `Hey ${d} How are you ?`
}

console.log(demo1(demo("sathish")));