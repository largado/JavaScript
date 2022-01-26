let xBolinha = 300;
let yBolinha = 200;
let diametro22 = 15;

let velocidadexdaBolinha = 6;
let velocidadeydaBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  circle(xBolinha, yBolinha, diametro22);
  xBolinha += velocidadexdaBolinha;
  //yBolinha =+ yBolinha + velocidadeydaBolinha;
  
  if(xBolinha > width || xBolinha < 0) {
    velocidadexdaBolinha *= -1;
  }
}