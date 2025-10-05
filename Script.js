// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// autoplay slideshow
setInterval(() => { plusSlides(1) }, 4000);

// MODAL GALLERY
function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// BUKU KENANGAN
function saveMessage(e) {
  e.preventDefault();
  let nama = document.getElementById("nama").value;
  let pesan = document.getElementById("pesan").value;

  let div = document.createElement("div");
  div.style.padding = "10px";
  div.style.background = "#eee";
  div.style.margin = "10px 0";
  div.style.borderRadius = "8px";
  div.innerHTML = "<strong>" + nama + "</strong><br>" + pesan;

  document.getElementById("list-pesan").appendChild(div);
  e.target.reset();
}
