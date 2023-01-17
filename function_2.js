
function sayHello(name) {
    return `hello ${name}`
}

function getUserRole(name,role) {
    switch (role) {
        case "admin":
            console.log(sayHello(name));
            console.log("you access all features ");
            break;
        case "user":
            console.log(sayHello(name));
            console.log("you access all courses ");
            break;
        case "subadmin":
            console.log(sayHello(name));
            console.log("you access to delete and create coures ");
            break;
    
        default:
            console.log(sayHello(name));
            console.log("you not access any ");
            break;
    }
}


var demofun=function(name) {
    return sayHello(name);
}

getUserRole("sathish","subadmin");
var demo=getUserRole;//function stored in variable
demo("demo","demo");
console.log(demofun("sathish kumar"));