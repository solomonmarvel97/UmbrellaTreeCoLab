// $(document).ready(function () {

//   var scrollLink = $('.scroll');

//   // Smooth scrolling
//   scrollLink.click(function (e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 400);
//   });

// })

const smoothScroll = (id)=> {
  const elm = document.getElementById(id)
  elm.scrollIntoView({behavior: "smooth"})
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  try {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  } catch (error) {
    return;
  }

}