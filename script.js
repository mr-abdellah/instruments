const nav = document.querySelector(".container-nav");
const navHeight = nav.getBoundingClientRect().height;
// const cookie = document.querySelector(".cookie-overlay");
// const cookiecheck = document.querySelector(".cookie-check");
const video = document.querySelector(".video");
const play = document.getElementById("video-play");
const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile-nav");

//hamburger
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  hamburger.classList.toggle("is-active");
  mobilenav.classList.toggle("is-active");
});

//sticky nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-14rem";
  }
  prevScrollpos = currentScrollPos;
};

//video-controllers
play.addEventListener("click", function (e) {
  play.classList.toggle("hidden");
  video.setAttribute("controls", "controls");
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});

// section reveal
const allSections = document.querySelectorAll(".section"); //nodelist

const revealSection = function (entries, observer) {
  const [entry] = entries; //because one threshold
  //console.log(entry);
  //console.log(entry.target); //<section class='section' id='section--1'></section>
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target); //so no more events repeating
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//cookie message

const cookie = document.querySelector(".cookie-overlay");
const cookiecheck = document.querySelector(".cookie-check");

cookiecheck.addEventListener("click", function (e) {
  e.preventDefault();
  cookie.classList.add("cookie-overlay-hidden");
});
