function openMenu() {
  document.querySelector(".menu-dropdown").style.height = "100%";
}

function closeMenu() {
  document.querySelector(".menu-dropdown").style.height = "0";
}

//Scroll to the top

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

///////

const columns = document.querySelectorAll(".process-col");
columns.forEach((col) => {
  col.addEventListener("mouseenter", () => {
    // Remove active class from all
    columns.forEach((c) => c.classList.remove("expand"));
    // Add to current
    col.classList.add("expand");
  });
});

// Faq

const faqTabs = document.querySelectorAll(".faq-tab");
faqTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const body = tab.querySelector(".faq-body");
    const isOpen = body.classList.contains("open");
    document
      .querySelectorAll(".faq-body")
      .forEach((f) => f.classList.remove("open"));

    //  If it wasn't open, open it now
    if (!isOpen) {
      body.classList.add("open");
    }
  });
});

// swipper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    perPage: 2,
    cover: true,
    heightRatio: 0.5,
    autoScroll: {
      speed: 1,
    },
  }).mount();
});

//
