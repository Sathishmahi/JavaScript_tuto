/*

golbal context is act like a scanner

it is scanned(memorize) to entire document before run a code 

so in this case before calling a function work without any error

but 
    the main idea is function work ing well on global context

    variables donot working on global context
    ex:-

    console.log(d);

    var d=10;

    in this case to our output was undefined var was available in the document

    but your not created a var but we are calling it at the point of time to throw a erro
    



 */


sayHello();//global context
function sayHello() {
    console.log("hello");
}

console.log(a);//global context does not applied variables so print undefined
var a=10;
