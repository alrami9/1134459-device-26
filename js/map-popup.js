var mapLink = document.querySelector(".link-map-popup");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".modal-close-btn");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
})
