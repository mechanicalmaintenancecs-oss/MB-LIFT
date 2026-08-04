// ===============================
// MB LIFT Website
// script.js
// ===============================

window.addEventListener("load", function () {

    // Hide Preloader
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Navbar Scroll Effect
// ===============================

const navbar = document.querySelector(".navbar-custom");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// Mobile Menu
// ===============================

const mobileBtn = document.querySelector(".mobile-btn");

const navMenu = document.querySelector(".nav-menu");

mobileBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


// ===============================
// Close Menu After Click
// ===============================

document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
