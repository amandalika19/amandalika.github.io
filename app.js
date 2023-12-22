var myFullpage = new fullpage('#fullpage', {
    scrollBar: true,
    anchors: ["home", "about", "experience", "projects"],
    menu: "#menu",

    afterRender: () => {
        // selectors for Floop card
        let floopCard = document.querySelector("#floopCard");
        let floopFront = document.querySelector("#floopCard .front");
        let floopBack = document.querySelector("#floopCard .back");

        // selectors for Microsoft card
        let ms1Card = document.querySelector("#ms1Card");
        let ms1Front = document.querySelector("#ms1Card .front");
        let ms1Back = document.querySelector("#ms1Card .back");

        
        // selectors for Microsoft card
        let ms2Card = document.querySelector("#ms2Card");
        let ms2Front = document.querySelector("#ms2Card .front");
        let ms2Back = document.querySelector("#ms2Card .back");

        $(floopCard).mouseup( () => {
            $(floopFront).toggleClass("hide");
            $(floopBack).toggleClass("hide");
        });

        $(ms1Card).mouseup( () => {
            $(ms1Front).toggleClass("hide");
            $(ms1Back).toggleClass("hide");
        });

        $(ms2Card).mouseup( () => {
            $(ms2Front).toggleClass("hide");
            $(ms2Back).toggleClass("hide");
        });
    }
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Grad Student", "Software Developer", "Seattle Native"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
