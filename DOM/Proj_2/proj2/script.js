const red=document.querySelector(".red");
const pink=document.querySelector(".pink");
const orange=document.querySelector(".orange");
const voilet=document.querySelector(".violet");
const cyan=document.querySelector(".cyan");

const center=document.querySelector(".center");
// window.getComputedStyle(red).backgroundColor;

const getBGcolor=(selectedEle)=>{
    return window.getComputedStyle(selectedEle).backgroundColor;
    // selectedEle.style.backgroundColor='rgb(0,0,0)';
};

// var color=getBGcolor(pink);
// getBGcolor(pink);

// orange.addEventListener('mouseenter',()=>{
//     center.style.background=color;
// });


orange.addEventListener('mouseout',()=>{
    // center.style.background=color;
    alert ("Hello World!");
});



// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", myFunction);

// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);


const magicColorChange=(SelectedEle,color)=>{///to change the background color given element and color 
    SelectedEle.style.background=color;
};

// magicColorChange(orange,'rgb(0,0,0');

var arr=[orange,pink,red,voilet,cyan];
var colo=['rgb(100,100,20)','rgb(100,100,0)','rgb(0,0,0)','rgb(100,200,200)','rgb(10,10,120)']
let count=1;
setInterval(()=>{
    console.log(count);
    count++;
    // if(count<100){

    // counter.innerText=count;}
    // else{
    //     counter.innerText="out of bound";
    // }
    // count<=1000?counter.innerText=count:counter.innerText="out of bound";
    
    if(count<1000){
        for(let i=0;i<arr.length;i++){
            arr[i].style.background=colo[i];
        }
    }
    
},10)
