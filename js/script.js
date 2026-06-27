// ==========================================
// ELEMENTOS
// ==========================================

const header = document.getElementById("header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// ==========================================
// HEADER AO ROLAR
// ==========================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

// ==========================================
// MENU MOBILE
// ==========================================

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    nav.classList.toggle("active");

});

// ==========================================
// FECHAR MENU AO CLICAR NO LINK
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        nav.classList.remove("active");

    });

});

// ==========================================
// FECHAR MENU CLICANDO FORA
// ==========================================

document.addEventListener("click", (e) => {

    const clicouNoMenu = nav.contains(e.target);
    const clicouNoBotao = hamburger.contains(e.target);

    if (!clicouNoMenu && !clicouNoBotao) {

        hamburger.classList.remove("active");

        nav.classList.remove("active");

    }

});

// ==========================================
// FECHAR AO VOLTAR PARA DESKTOP
// ==========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 950) {

        hamburger.classList.remove("active");

        nav.classList.remove("active");

    }

});

// ==========================================
// SCROLL SUAVE
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        window.scrollTo({

            top: section.offsetTop - 80,

            behavior: "smooth"

        });

    });

});

// ==========================================
// MENU ATIVO
// ==========================================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});