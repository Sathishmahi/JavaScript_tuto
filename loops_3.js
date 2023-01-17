var studentName=['sathish','hari','jai','bala','kumar'];

//for each loop but actualy function

studentName.forEach(element => console.log(element));

//for of loop
for(let n of studentName){
    console.log(n);
}



const symbols={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook"
}


//for in loop in array
for(let s in studentName){// if array was iterate s is index of arrayy 
    // console.log(symbols[s]);
    console.log(studentName[s]);
}

//for in loop in object
for(let s in symbols){// if object was iterate s is key of object 
    console.log(symbols[s]);
    // console.log(studentName[s]);
}


