let xBolinha = 100;
let yBolinha = 200;
let diametro22 = 22;
let velocidadexdaBolinha = 5;
let velocidadeydaBolinha = 6;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(20);
  ellipse(xBolinha, yBolinha, diametro22);
  xBolinha =+ xBolinha + velocidadexdaBolinha;
  yBolinha =+ yBolinha + velocidadeydaBolinha;
  
  if(xBolinha > width || xBolinha < 0) {
    velocidadexBolinha *= -1;
  }
}