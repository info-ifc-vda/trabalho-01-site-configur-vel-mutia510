 let tamanhoFonte = 16;

function mudarImagem(novaSrc) {
  const imgDestaque = document.getElementById("imgDestaque");
  imgDestaque.src = novaSrc;
}
function trocarCor() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
function trocarFonte() {
   tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

