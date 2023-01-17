const sathish={
    firstName:"sathish",
    lastName:"kumar",
    role:"DataScientist",
    getInfo:function(){
        console.log(`
        Hi ${this.firstName} How are You?
        your role is ${this.role}
        `);
    }
}



const kumar={
    firstName:"bala",
    lastName:"kumar",
    role:"Machine Learning Engineer",
}


sathish.getInfo();


sathish.getInfo.bind(kumar)();//to refer this into sathihsh to kumar using bind kwyword
sathish.getInfo.call(kumar);//to call this into sathihsh to kumar using bind kwyword
