console.log(this);//node consider as empty scope
function sayName() {
    var n="sathish";
    console.log(this);//node consider as not a empty scope
}
sayName();