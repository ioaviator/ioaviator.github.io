/* ==============================
   TYPING EFFECT
============================== */
const text = "Data Engineer | Analytics Engineer";
let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

window.addEventListener("DOMContentLoaded", typeEffect);

/* ==============================
   SCROLL REVEAL ANIMATION
============================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);