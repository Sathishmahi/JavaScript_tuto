var f_name=["sathish","kumar","hari"];
var f_names=new Array ("sathish","kumar","hari");

/**

//  to retrive a all element using recursion

function print_ele(val){
if(val===0){
    console.log(f_name[0]);
    return f_name[0];
}
console.log(f_name[(f_name.length-1)-val]);
return print_ele(val-1);
}

print_ele(2);
 */

console.log(f_name);
console.log(f_name.length);
console.log(f_name.concat(f_names));
console.log(f_name.indexOf("sathish"));
console.log(f_name.pop());
console.log(f_name.push("hari haran"));
f_name.unshift("new value");//to add a element in index 0 not a replace
console.log(f_name);
f_name.shift();//to remove first element
console.log(f_name);

console.log(f_name.indexOf("sathish"));

var n="sathish";
Array.from(n);//convert a str into arr
console.log(Array.from(n));
