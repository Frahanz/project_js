// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}

function handleMouse(element, isMouseEnter) {
  const titleElement = element.querySelector('.card-title');
  if (isMouseEnter) {
    element.style.backgroundColor = '#946b13'; // Ubah warna latar belakang saat mouse masuk
    titleElement.textContent = 'Dibaca Baik Baik!'; // Ubah judul saat mouse masuk
  } else {
    element.style.backgroundColor = ''; // Kembalikan warna latar belakang saat mouse keluar
    titleElement.textContent = 'Bahasa Pemrograman'; // Kembalikan judul saat mouse keluar
  }
}

const footerButton = document.getElementById('footerButton');
const popup = document.getElementById('popup');

footerButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

function closePopup() {
  popup.style.display = 'none';
}
