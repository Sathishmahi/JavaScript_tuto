var User=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCouserCount=function(){
        console.log(`Hi ${this.firstName} your couserCount is ${this.courseCount}`);
    }
}

User.prototype.getFirstName=function(){// to create a proto of User function 

    console.log(`Hi ${this.firstName}`);
}

var sathish=new User("sathish",12);
sathish.getCouserCount();
if (sathish.hasOwnProperty("firstName")) {
    sathish.getFirstName();
    
}

// console.log(sathish);