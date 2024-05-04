
  document.addEventListener('DOMContentLoaded', function() {
    var scrollToButton = document.querySelector('.whyUsbutton');
    scrollToButton.addEventListener('click', function(event) {
      event.preventDefault();
      var scrollToElement = document.querySelector(this.getAttribute('href'));
      scrollToElement.classList.add('scroll-animation'); // Add the scroll-animation class
      setTimeout(function() {
        scrollToElement.scrollIntoView();
      }, 100); // Delay the scrolling to allow the animation to take effect
    });
  });

