const mapLink = document.querySelector('.contacts-button-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = document.querySelector('.modal-close-map');




mapLink.addEventListener('click', function (event) {
   event.preventDefault();
   mapPopup.classList.add('modal-show');
});

window.addEventListener('keydown', function (event) {
   if (event.keyCode === 27) {
      event.preventDefault();

      if (mapPopup.classList.contains("modal-show")) {
         mapPopup.classList.remove("modal-show");
      }
   }
});

mapClose.addEventListener('click', function (event) {
   event.preventDefault();
   mapPopup.classList.remove('modal-show');

});