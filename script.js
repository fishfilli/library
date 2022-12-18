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
  removeCards();
  displayLibrary();
  closeModal();
});

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title.toLowerCase();
  this.author = author.toLowerCase();
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function removeCards() {
  const library = document.querySelector(".library-container");
  while (library.lastChild) {
    library.removeChild(library.lastChild);
  }
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(i);
  }
}

function createCard(i) {
  const libraryContainer = document.querySelector(".library-container");
  const bookCard = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const btnContainer = document.createElement("div");
  const readBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  btnContainer.classList.add("card-buttons");
  readBtn.classList.add("read-button");
  deleteBtn.classList.add("delete-button");

  title.textContent = myLibrary[i].title;
  author.textContent = `Author: ${myLibrary[i].author}`;
  pages.textContent = `Pages: ${myLibrary[i].pages}`;
  deleteBtn.textContent = "Delete";
  if (myLibrary[i].read) {
    readBtn.textContent = "Read";
  } else {
    readBtn.textContent = "Unread";
  }

  libraryContainer.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnContainer);
  btnContainer.appendChild(readBtn);
  btnContainer.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    let index = myLibrary.findIndex((obj) => {
      return (
        obj.title === e.target.parentNode.parentNode.firstChild.textContent
      );
    });

    myLibrary.splice(index, 1);
    removeCards();
    displayLibrary();
  });
}
