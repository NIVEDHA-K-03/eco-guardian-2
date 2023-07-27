"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal);

//funtion-open model
const openModal = function () {
  console.log("Button CLicked");
  modal.classList.remove("hidden");

  //to blur the background
  overlay.classList.remove("hidden");
};

//funtion-close by outer side
const closeModal = function () {
  console.log("Button closed");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//press anyrhing in keyboard
/* document.addEventListener('keydown',function(e){
    console.log(e);}); */

document.addEventListener("keydown", function (e) {
  //it shows only the pressed Key
  console.log(e.key);
  //closing the modal by clicking esc button
  if (e.key === "Escape") {
    console.log("esc is pressed");
    closeModal();
  }
});
