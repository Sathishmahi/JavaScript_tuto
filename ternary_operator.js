
var authencated=true;
var facebook=false;

if(authencated){
    console.log("signout button");
}
else{
    console.log("login button");
}

//ternary operator


authencated?console.log("signout button"):console.log("login button");
authencated?facebook?console.log("facebook login"):console.log("not a facebook login"):console.log("login button");