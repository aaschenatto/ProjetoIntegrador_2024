//cod carrosel//

/*
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
*/


document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function() {
  console.log("DOM fully loaded and parsed");
  let slider = document.querySelectorAll('.slider');
  let currentSlide = 0;
  function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
  }
  function showSlider() {
    slider[currentSlide].classList.add('on')
  }
  function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    showSlider()
  }

  function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
      currentSlide = slider.length -1
    } else {
      currentSlide--
    }
    showSlider()
  }
  document.getElementById('next-button').addEventListener('click', nextSlider);
  document.getElementById('prev-button').addEventListener('click', prevSlider);
  console.log('aa');
}, 3000);
});
  
  
