const addBookBtn = document.querySelector("#add-book-button");
const modalCancelBtn = document.querySelector("#cancel-button");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector(".modal");

addBookBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
modalCancelBtn.addEventListener("click", closeModal);

function openModal() {
  overlay.classList.add("active");
  modal.classList.add("active");
}

function closeModal() {
  overlay.classList.remove("active");
  modal.classList.remove("active");
}
