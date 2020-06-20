function bgChanger(){
    if(this.scrollY>this.innerHeight/1.5){
        document.body.classList.add("bg-active");
    }
    else{
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll",bgChanger);
const  hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const pgset =document.querySelector("pg");
const links= document.querySelector(".nav-links a");
hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
   
});
