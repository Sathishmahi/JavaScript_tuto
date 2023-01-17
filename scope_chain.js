/* in this case sayName function doesnot have a var name but 
sucessfully executed because inside memory base is global context
above te global context all executed will store so in this case global context name will print here

conclusion ----->

            global to excection (acceptable in js)
            excection to global (not acceptable in js throw a error)


            function is a scope
*/
var f_name="sathish";
console.log("line number 2:",f_name);

function sayName(){

    var f_name="kumar";
    console.log("line number 5 :",f_name);   

    sayName1();
    function sayName1(){
        console.log("line number 23:",f_name);//in this case name=kumar beacuse easy to tramsmit the name like father(execution context) to son(inside the execution another exection context) not grandfather(global context) to son
    }
}
sayName();
// console.log("line number 2:",f_name);