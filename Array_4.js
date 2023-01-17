
//slice func
const arr=["sathish","hari","bala","dinesh","jai","kumar"];
console.log(arr.slice(2,5));
console.log(arr.slice(2));


//splice function
arr.splice(0,arr.length,"replace");//to count a starting(0) and end with (arr.lentgh) to remove all count elements and relace with given string or anything
console.log(arr);