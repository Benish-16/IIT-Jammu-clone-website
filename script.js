
let slides=document.getElementsByClassName("slides");
let navlinks=document.getElementsByClassName("dot");
let currentSlide=0;

document.getElementById("next").addEventListener("click",()=>{
    changeSlide(currentSlide +1);
});
document.getElementById("prev").addEventListener("click",()=>{
    changeSlide(currentSlide -1);
});

function changeSlide(moveTo){
    if(moveTo >=slides.length){
        moveTo=0;
    }
    if(moveTo < 0){
        moveTo=slides.length -1;
    }
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("activeDot");
    currentSlide=moveTo;

}


document.querySelectorAll(".dot").forEach((bullet,bulletIndex)=>{
    bullet.addEventListener("click",()=>{

        if(currentSlide!==bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});

window.onload=setInterval(function(){
    changeSlide(currentSlide+1)
},3000);

function hello(){
    document.getElementById("usa").style.backgroundColor="red"
}
function Hello(){
    document.getElementById("usa").style.backgroundColor="#fff"
}
function ritu(){
    document.getElementById("cute").style.backgroundColor="red"
}
function Ritu(){
    document.getElementById("cute").style.backgroundColor="#fff"
}
function sanj(){
    document.getElementById("nice").style.backgroundColor="red"
}
function Sanj(){
    document.getElementById("nice").style.backgroundColor="#fff"
}
  