const btn_prev = document.querySelector('.gallery-button-back');
const btn_next = document.querySelector('.gallery-button-next');

const images = document.querySelectorAll('.gallery-content img');
console.log(images);
let i = 0;
btn_prev.addEventListener('click', function () {
   images[i].className = 'none';
   i--;
   if (i < 0) {
      i = images.length - 1;
   }
   images[i].className = 'showed';
});
btn_next.addEventListener('click', function () {
   images[i].className = 'none';
   i++;
   if (i >= images.length) {
      i = 0;
   }
   images[i].className = 'showed';
});