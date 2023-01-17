var User={
    firstName:"",
    getUserName:function(){
        console.log(`Hi ${this.firstName}`);
    }

};
var sathish=Object.create(User);
sathish.firstName="sathish kumar";
sathish.getUserName();


var kumar=Object.create(User,{//to create object and constructor
    firstName:{value:"kumar"}
});

kumar.getUserName();