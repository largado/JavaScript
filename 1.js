//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro22 = 15;
let raio = diametro22 / 2;

//velocidade da bolinha

let velocidadexdaBolinha = 16;
let velocidadeydaBolinha = 6;


//variáveis da raquete

let xRaquete = 1;
let yRaquete = 20;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  mostraBolinha();
  movimentaBolinha();
  verificaSeColide();
  mostraRaquete();
  movimentaMinhaRaquete();
  

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro22);
}

function movimentaBolinha(){
  
  xBolinha += velocidadexdaBolinha;
  yBolinha =+ yBolinha + velocidadeydaBolinha;
  
}

function verificaSeColide(){
    if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexdaBolinha *= -1;
    
  }
  if(yBolinha + raio > height || yBolinha - raio <0){
    velocidadeydaBolinha *= -1;
  }
  
}

function mostraRaquete(){
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
  
}
