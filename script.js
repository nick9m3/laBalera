const des= document.getElementById("desc");
const cov= document.getElementById("covi");
const caro1= document.querySelector(".car1");
const caro2= document.querySelector(".car2");

readevent();

function readevent(){
    des.addEventListener('click', visual1);
    cov.addEventListener('click', visual2);
}

function visual1(){
    caro1.style.display = "block";
    caro2.style.display = "none";
}

function visual2(){
    caro2.style.display = "block";
    caro1.style.display = "none";
}