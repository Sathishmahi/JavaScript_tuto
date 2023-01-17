var user={
    firstName:"sathish",
    lastName:"kumar",
    uId:"sathish123",
    email:"sathish@gmail.com",
    age:20,
    isMale:true,
    study:{
        school:"govt school crpt",
        college:"PSN CET"
    },
    coursesToBuy:[],

    isAgeEven:()=>this.age%2===0,//inside the objects call back function

    getEntrooledCourses:function(){
        return ` hi ${this.firstName} you have buy ${this.coursesToBuy}`
    }
        
    

};

// console.log(user.study.school);

user.coursesToBuy[0]="Ml course";
user.coursesToBuy[1]="Dl course";
user.study["Phd"]="Columbia university";

user.coursesToBuy

console.log(user.getEntrooledCourses());

