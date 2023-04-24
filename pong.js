//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//variaveis velocidade da bolinha
let velXBolinha = 6;
let velYBolinha = 6;

//variaveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let raqueteAltura = 80;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaquete();
  colisaoRaquete();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  mostraPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();
}
  
  function mostraPlacar(){
    
    textAlign(CENTER);
    stroke(255);
    textSize(16);
    fill(color (255, 140, 0));
    rect(150, 10, 40, 20);
    rect(450, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    text(pontosOponente, 470, 26);
    }
  
  function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
  
  function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}
  
function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, raqueteAltura);
}  

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velXBolinha *= -1;  
  }
  if (yBolinha + raio > height || yBolinha - raio< 0){
    velYBolinha *= -1;
  }
}
  
function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velXBolinha *= -1;
  }
}
  
function colisaoRaqueteOponente(){
if(xBolinha + raio > xRaqueteOponente && yBolinha + raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){
  velXBolinha *= -1;
}

  
}