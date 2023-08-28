"use strict";
const NOMEDOGATO = localStorage.getItem("nomeGato");

const imagem = document.getElementById("imgGato");
const caixaTexto = document.getElementById("text");
const popUp = document.getElementById("pop-up"); 

let gatoDormindo = false;

document.querySelector(".titulo").innerText += ` ${NOMEDOGATO}!`;
inicializaStatus();

document.getElementById("conversar").addEventListener("click", function () {
  let textoUsuario = document.getElementById("mensagem");
  console.log(textoUsuario.value);
  if (!textoUsuario.value) {
    window.alert("você não digitou nada no campo de texto.");
    return;
  }
  voceDiz(textoUsuario.value);
  const respostaGato = [
    "OMG",
    "miau?",
    "miau, miau, miau.",
    "^-^",
    ">_<",
    "*ronronado*",
    "oii!!",
  ];
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} está dormindo.`);
    return;
  }
  gatoDiz(elementoAleatorio(respostaGato));
  textoUsuario.value = "";
});

document.getElementById("btn-alimentar").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} está dormindo.`);
    return;
  }
  atualizaStatus(COMIDA, document.getElementById("s-alimentar"));
  aviso(`Você alimentou ${NOMEDOGATO}.`);
});


document
  .getElementById("btn-dar-bebida")
  .addEventListener("click", function () {
    if (gatoDormindo) {
      aviso(`${NOMEDOGATO} está dormindo.`);
      return;
    }
    atualizaStatus(BEBIDA, document.getElementById("s-bebida"));
    aviso(`Você deu algo para ${NOMEDOGATO} beber.`);
  });


document.getElementById("btn-brincar").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} está dormindo.`);
    return;
  }
  atualizaStatus(BRINQUEDOS, document.getElementById("s-brincar"));
  aviso(`Você brincou com ${NOMEDOGATO}.`);
});


document.getElementById("btn-carinho").addEventListener("click", function () {
  if (gatoDormindo) {
    aviso(`${NOMEDOGATO} está dormindo.`);
    return;
  }
  const valorCarinho = Math.floor(Math.random() * 10 + 1);
  const texto = document.getElementById("s-carinho");
  if (valorCarinho < 3) {
    aviso(`Você fez um carinho muito ruim em ${NOMEDOGATO}.`);
    texto.innerText = String.fromCodePoint("0x1f63f");
  } else if (valorCarinho < 6) {
    aviso(`Você fez um carinho mais ou menos em ${NOMEDOGATO}`);
    texto.innerText = String.fromCodePoint("0x1f63e");
  } else if (valorCarinho <= 9) {
    aviso(`Você fez um carinho bom em ${NOMEDOGATO}.`);
    texto.innerText = String.fromCodePoint("0x1f638");
    gatoDiz("miau :)");
  } else {
    aviso(`Você fez O CARINHO PERFEITO em ${NOMEDOGATO}.`);
    texto.innerText = String.fromCodePoint("0x1f63b");
    gatoDiz("MIAU! ^-^");
  }
});


document.getElementById("btn-acordar").addEventListener("click", function () {
  const acordado = "0x1f63a";
  const dormindo = "0x1f4a4";
  const texto = document.getElementById("acordar");
  if (gatoDormindo) {
    texto.innerText = String.fromCodePoint(acordado);
    gatoDormindo = false;
    imagem.src = `imagens/${elementoAleatorio(fotos)}.png`;
    aviso(`${NOMEDOGATO} acordou!.`);
  } else {
    texto.innerText = String.fromCodePoint(dormindo);
    gatoDormindo = true;
    imagem.src = "imagens/dormindo.png";
    aviso(`${NOMEDOGATO} foi mimir.`);
  }
});

document.getElementById("limpar-chat").addEventListener("click", function () {
  caixaTexto.innerHTML = `<h3>converse com seu gatinho</h3></div>`;
});