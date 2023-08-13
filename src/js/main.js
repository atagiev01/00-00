"use strict";
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
    }
    // Düymə aktiv olduğunda "+" işarəsini döndür və genişliyi dəyiş
    var icon = this.querySelector("p");
    if (this.classList.contains("active")) {
      icon.style.transform = "rotate(46deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
      icon.style.width = "fit-content";
    }
  });
}


var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const btEIlist = document.querySelectorAll('.bt');
const smallPreviewList = document.querySelectorAll('.small-preview');
const largePreview = document.getElementById('largePreview');
let slider = document.querySelector(".product__view-shop-card__small-img");
let slides = slider.querySelectorAll("a");
let currentSlide = 0;

btEIlist.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    if (1) {
      const activeBtn = document.querySelector('.bt.range-color');
      if (activeBtn) {
        activeBtn.classList.remove('range-color');
      }
      btnEl.classList.add('range-color');
    }
  });
});

smallPreviewList[0].classList.add('active');
largePreview.setAttribute('src', smallPreviewList[0].getAttribute('src'));

smallPreviewList.forEach(smallPreview => {
  smallPreview.addEventListener('click', () => {
    largePreview.setAttribute('src', smallPreview.getAttribute('src'));

    smallPreviewList.forEach(smallPreview => {
      smallPreview.classList.remove('active');
    });

    smallPreview.classList.add('active');
  });
});

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
        
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }
    let selectedSlide = slides[currentSlide].querySelector("img");
    largePreview.src = selectedSlide.src;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);
showSlide(currentSlide);








function showSlide(slideIndex) {
  if (slideIndex < 0) {
      currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
      currentSlide = 0;
  }
  let selectedSlide = slides[currentSlide].querySelector("img");
  largePreview.src = selectedSlide.src;

  smallPreviewList.forEach(smallPreview => {
      smallPreview.classList.remove('active');
  });

  smallPreviewList[currentSlide].classList.add('active');
}

btEIlist.forEach(btnEl => {
  btnEl.classList.remove('range-color');
});

// Add range-color class to the current button
btEIlist[currentSlide].classList.add('range-color');

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);
showSlide(currentSlide);







// ölçü
var selectSelected = document.querySelector(".custom-select__select-selected");
var selectItems = document.querySelector(".custom-select__select-items");

selectSelected.addEventListener("click", function() {
    selectItems.classList.toggle("custom-select__show");
});

var options = document.querySelectorAll(".custom-select__select-items div");
options.forEach(function(option) {
    option.addEventListener("click", function() {
        selectSelected.textContent = option.textContent;
        selectItems.classList.remove("custom-select__show");
    });
});