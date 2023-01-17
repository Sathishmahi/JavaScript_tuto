var studentName=["sathish","kumar","hari","dinesh",'jai'];
// for (let index = 0; index < studentName.length; index++) {
// console.log(studentName[index]);   
// for (let i = 0; i < studentName[index].length; i++) {
//     console.log(studentName[index][i]);
    
// } 
// }
// 
// console.log(studentName[0])?studentName[0].length<5:""

// var name_="sathish";
for(let i=0;i<studentName.length;i++){

    // studentName[i].length<5?console.log(studentName[i]):"";
   if (studentName[i].length<5)continue;
   if(studentName[i]==="jai")break;
   console.log(studentName[i]);

    }

console.log(i);



