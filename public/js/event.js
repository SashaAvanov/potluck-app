/* ----------- QUERY SELECTORS ---------- */

//Event details modal
const detailsModal = document.querySelector(".details-modal");
const openDetailsModalBtn = document.querySelector(".btn-open-details");
const closeDetailsModalBtn = document.querySelector(".btn-close-details");
//Event requests modal
const requestsModal = document.querySelector(".requests-modal");
const openRequestsModalBtn = document.querySelector(".btn-open-requests");
const closeRequestsModalBtn = document.querySelector(".btn-close-requests");
//Event items modal
const itemsModal = document.querySelector(".items-modal");
const openItemsModalBtn = document.querySelector(".btn-open-items");
const closeItemsModalBtn = document.querySelector(".btn-close-items");
//Overlays
const detailsOverlay = document.querySelector(".details-overlay");
const requestsOverlay = document.querySelector(".requests-overlay");
const itemsOverlay = document.querySelector(".items-overlay");

/* ----------- FUNCTIONS ---------- */

//Event details 
const openDetailsModal = function () {
    detailsModal.classList.remove("hidden");
    detailsOverlay.classList.remove("hidden");
};
  
const closeDetailsModal = function () {
    detailsModal.classList.add("hidden");
    detailsOverlay.classList.add("hidden");
};

//Event requests
const openRequestsModal = function () {
    requestsModal.classList.remove("hidden");
    requestsOverlay.classList.remove("hidden");
};
  
const closeRequestsModal = function () {
    requestsModal.classList.add("hidden");
    requestsOverlay.classList.add("hidden");
};

//Event items
const openItemsModal = function () {
    itemsModal.classList.remove("hidden");
    itemsOverlay.classList.remove("hidden");
};
  
const closeItemsModal = function () {
    itemsModal.classList.add("hidden");
    itemsOverlay.classList.add("hidden");
};

/* ----------- EVENT LISTENERS ---------- */

//Overlays
detailsOverlay.addEventListener("click", closeDetailsModal);
requestsOverlay.addEventListener("click", closeRequestsModal);
itemsOverlay.addEventListener("click", closeItemsModal);

//Event details
openDetailsModalBtn.addEventListener("click", openDetailsModal);
closeDetailsModalBtn.addEventListener("click", closeDetailsModal);

//Event requests
openRequestsModalBtn.addEventListener("click", openRequestsModal);
closeRequestsModalBtn.addEventListener("click", closeRequestsModal);

//Event items
openItemsModalBtn.addEventListener("click", openItemsModal);
closeItemsModalBtn.addEventListener("click", closeItemsModal);