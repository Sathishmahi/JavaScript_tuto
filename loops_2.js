var studentName=["sathish","kumar","hari","dinesh",'jai'];
/**
 diff between while and dowhile is if our condtion fail while loop is imidiately terminated but dowhile atleast execute code for one time 

 because of while loop to check the condtion first after execute the code 
 but dowhile loop to execute the code first after check the condition   
 */
let i=0;

while (i<studentName.length) {
    console.log(studentName[i]);
    i++;
}
 do{
    console.log(studentName[i]);
    i++;
}while (i<studentName.length)
console.log(i);