//functions without retrun

function sayHello(i=10) {
    console.log(i);
}

//functions with retrun

function returnHello(i="XYZ") {
    return `hello ${i},  how are you ?`
}

///calling function

console.log(returnHello("sathish"));
