// getFullYear
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    // linkContainer.classList.toggle("show-links")

    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
//    console.log(containerHeight)

    if (containerHeight === 0) {
        linkContainer.style.height = `${linkHeight}px`;
    }else{
        linkContainer.style.height = 0;
    }
});

// Fixed the navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")


window.addEventListener("scroll", function (){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }


    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    }else{
        topLink.classList.remove("show-link")
    }
});

        //    smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        
        window.scrollTo({
            left:100,
            top: position,
        });
        linkContainer.style.height = 0;
    });
});

