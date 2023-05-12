// changing   "I am currently learning HTML and CSS" to "I am currently learning HTML and CSS" when button is clicked.

let updateButton = document.querySelector("#update-button");
let bioText = document.querySelector("#bio-text");

updateButton.addEventListener("click", function () {
  bioText.textContent = "I am currently learning JavaScript";
});
