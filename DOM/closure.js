function demo(){
    var f_name="Sathish";
    function demo1(){
        console.log(f_name);
    }
    return demo1;
};

var d=demo();

// d();

function addtion(x){
    return function(y){
        return x+y;
    }
};
var d1=addtion(10);
console.log(d1(20));


console.log(addtion(10)(30));//curring