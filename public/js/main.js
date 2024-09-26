const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");


const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
  
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};


overlay.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);