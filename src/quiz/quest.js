import getQuestion from "./API/questapi.js";

let perguntas = [];
let currentIndex = 0;

async function carregarPerguntas() {
  perguntas = await getQuestion();
  mostrarPergunta();
}

function mostrarPergunta() {
  const p = perguntas[currentIndex];
  document.getElementById("quest").innerHTML = p.pergunta;
  document.getElementById("a").innerHTML = p.respostas[0].texto;
  document.getElementById("b").innerHTML = p.respostas[1].texto;
  document.getElementById("c").innerHTML = p.respostas[2].texto;
  document.getElementById("d").innerHTML = p.respostas[3].texto;
}

function checarResposta(indice, event) {
  const correta = perguntas[currentIndex].respostas[indice].correta;
  if (correta) {
    alert("Correta!");
    event.target.style.backgroundColor = "green";
    currentIndex++;
  } else {
    alert("Incorreta!");
    event.target.style.backgroundColor = "red";
  }

  setTimeout(() => {
    if (currentIndex < perguntas.length) {
      mostrarPergunta();
  
      document.getElementById("a").style.backgroundColor = "";
      document.getElementById("b").style.backgroundColor = "";
      document.getElementById("c").style.backgroundColor = "";
      document.getElementById("d").style.backgroundColor = "";
    } else {
      alert("Fim do quiz!");
    }
  }, 1000);
}

document.getElementById("a").addEventListener("click", (event) => checarResposta(0, event));
document.getElementById("b").addEventListener("click", (event) => checarResposta(1, event));
document.getElementById("c").addEventListener("click", (event) => checarResposta(2, event));
document.getElementById("d").addEventListener("click", (event) => checarResposta(3, event));

carregarPerguntas();