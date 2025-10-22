const images = document.querySelectorAll('.display-images img');
let currentImage = 0;

function showNextImage() {
	images[currentImage].classList.remove('active');
	currentImage = (currentImage + 1) % images.length;
	images[currentImage].classList.add('active');
}

images[0].classList.add('active');
setInterval(showNextImage, 3000);