/*=========================
   TYPING EFFECT
=========================*/

const words = [
    "AI Enthusiast",
    "Machine Learning Learner",
    "Prompt Engineering Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

    if (!typingText) return;

    let currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
    }
    else {

        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        isDeleting = true;
        speed = 1500;

    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/*=========================
   MOBILE MENU
=========================*/

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if(menuIcon){

menuIcon.onclick = () =>{

navbar.classList.toggle("active");

};

}

/*=========================
   ACTIVE NAVIGATION
=========================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

sections.forEach(sec=>{

let top = window.scrollY;

let offset = sec.offsetTop - 150;

let height = sec.offsetHeight;

let id = sec.getAttribute("id");

if(top >= offset && top < offset + height){

navLinks.forEach(links=>{

links.classList.remove("active");

document.querySelector(".navbar a[href*="+id+"]").classList.add("active");

});

}

});

};

/*=========================
   STICKY HEADER
=========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

header.classList.toggle("sticky",window.scrollY>100);

});

/*=========================
   CONTACT FORM
=========================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting me! I'll get back to you soon.");

form.reset();

});

}

/*=========================
   SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});