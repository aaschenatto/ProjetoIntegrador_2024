window.onscroll = function () {
  scroll();
};

function scroll() {
  document.getElementById("marte").style.transform = "rotate(" + window.pageYOffset/32 + "deg)";
  document.getElementById("asteroide").style.transform = "rotate(" + window.pageYOffset/-64 + "deg)";
  document.getElementById("lua").style.transform = "rotate(" + window.pageYOffset/32 + "deg)";
  document.getElementById("nave").style.transform = "rotate(" + window.pageYOffset/-64 + "deg)";
}

/*
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
  
*/
