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

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
            POPUP DOS PROJETOS
========================================== */

const imagensProjeto = document.querySelectorAll(".abrir-popup");

const popup = document.getElementById("popupImagem");

const imagemPopup = document.getElementById("imagemPopup");

const fecharPopup = document.querySelector(".fechar-popup");

/* abrir popup */

imagensProjeto.forEach(imagem => {

    imagem.addEventListener("click", () => {

        popup.classList.add("ativo");

        imagemPopup.src = imagem.src;

        imagemPopup.alt = imagem.alt;

        document.body.style.overflow = "hidden";

    });

});

/* fechar botão */

fecharPopup.addEventListener("click", () => {

    popup.classList.remove("ativo");

    document.body.style.overflow = "auto";

});

/* fechar clicando fora */

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.classList.remove("ativo");

        document.body.style.overflow = "auto";

    }

});

/* fechar com ESC */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        popup.classList.remove("ativo");

        document.body.style.overflow = "auto";

    }

});