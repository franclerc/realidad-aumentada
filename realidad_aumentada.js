let img;

function preload() {
  img = loadImage("data/corcho.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 255, 0);  //  fondo transparente
  let imgWidth = img.width / 2;  // Redimensionar la imagen (la mitad del tamaño original)
  let imgHeight = img.height / 2;
  let x = (width - imgWidth) / 2;  // Centrando la imagen
  let y = (height - imgHeight) / 2;
  image(img, x, y, imgWidth, imgHeight);  // Dibujar imagen más pequeña y centrada
}
