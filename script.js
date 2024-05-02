"use strict";
let duration = 0.8;
let delay = 0.3;
let revealText = document.querySelector(".reveal");
let letters = revealText.textContent.split("");
revealText.textContent = "";
let middle = letters.filter(e => e !== " ").length / 2;
letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    revealText.append(span);
});

$("#btn-nav-menu").on("click", function () {
  $(this).toggleClass("open");
  $(".bg-nav, #nav-menu").toggleClass("show");
});

$('li[class^="nav-"]').on("click", function () {
  $("#btn-nav-menu").click();
});

window.addEventListener('resize', function() {
  const video = document.getElementById('background-video');
  const aspectRatio = video.videoWidth / video.videoHeight;
  const windowAspectRatio = window.innerWidth / window.innerHeight;

  if (windowAspectRatio > aspectRatio) {
      video.style.width = '100%';
      video.style.height = 'auto';
  } else {
      video.style.width = 'auto';
      video.style.height = '100%';
  }
});
