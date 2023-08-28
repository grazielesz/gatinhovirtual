const humorGato = () => String.fromCodePoint(elementoAleatorio(GATOREACOES));
  
  const voceDiz = function (texto) {
    caixaTexto.innerHTML += `<p class = "mensagem-usuario">você: ${texto}</p>`;
  };
  
  const gatoDiz = function (texto) {
    caixaTexto.innerHTML += `<p class = "mensagem-gato">${NOMEDOGATO}: ${texto}</p>`;
  };
  const aviso = function (texto) {
    //aviso no chat
    caixaTexto.innerHTML += `<p class = "mensagem-aviso">${texto}</p>`;
  };
  
  const elementoAleatorio = function (vetorElementos) {
    return vetorElementos[Math.floor(Math.random() * vetorElementos.length)];
  };
  
  const inicializaStatus = function () {
    const status = document.querySelectorAll(".status");
    status.forEach((texto) => {
      texto.innerText = humorGato();
      imagem.src = `imagens/${elementoAleatorio(fotos)}.png`;
    });
    document.getElementById("acordar").innerText = String.fromCodePoint(0x1f63a);
  };
  
  const atualizaStatus = function (escolherElementos, textStatus) {
    popUp.classList.remove("hidden"); 
    popUp.innerHTML = " "; 
    escolherElementos.forEach((element) => {
      popUp.innerHTML += `<p class = "radio-btn" ><input type="radio" name="radio" />${String.fromCodePoint(
        element
      )} </p>`;
    });
    popUp.innerHTML += `<input type="button" value="selecionar" id="fechar-pop-up" class="conversar" />`;
    document
      .getElementById("fechar-pop-up")
      .addEventListener("click", function () {
        popUp.classList.add("hidden");
      });
  
    textStatus.innerText = humorGato();
  };
