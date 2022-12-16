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
  document.getElementById("modal-form").reset();
}

const addBookForm = document.querySelector("#modal-form");

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  const newBook = new book(title, author, pages, read);
  addBookToLibrary(newBook);
  closeModal();
});

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}
