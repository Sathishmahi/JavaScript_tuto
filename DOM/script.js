var counter=document.querySelector(".counter");

var followers=document.querySelector(".followers");


let count=1;
setInterval(()=>{
    console.log(count);
    count++;
    // if(count<100){

    // counter.innerText=count;}
    // else{
    //     counter.innerText="out of bound";
    // }
    count<=1000?counter.innerText=count:counter.innerText="out of bound";
},10)

setTimeout(()=>{
    
    followers.innerText="follwers on instagram"
    // count===100?followers.innerText="follwers on instagram":followers.innerText="follwers on less instagram"
},100)
