/*==========================================================
MB LIFT
Main JavaScript
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*======================================================
    PRELOADER
    ======================================================*/

    window.addEventListener("load", function () {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(function () {

                loader.remove();

            }, 500);

        }

    });

    /*======================================================
    STICKY NAVBAR
    ======================================================*/

    const navbar = document.querySelector(".navbar-custom");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /*======================================================
    BACK TO TOP BUTTON
    ======================================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {

        if (!topBtn) return;

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*======================================================
    SMOOTH SCROLL
    ======================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*======================================================
    MOBILE MENU
    ======================================================*/

    const mobileBtn = document.querySelector(".mobile-btn");

    const navMenu = document.querySelector(".nav-menu");

    if (mobileBtn && navMenu) {

        mobileBtn.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            this.classList.toggle("active");

        });

    }

});
