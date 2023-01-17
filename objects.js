var user={
    firstName:"sathish",
    lastName:"kumar",
    uId:"sathish123",
    email:"sathish@gmail.com",
    age:20,
    isMale:true
};

console.log(user["age"]);
console.log(user.age);


user.age=22;
console.log(user.age);

console.table(user);
