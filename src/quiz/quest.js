import getQuestion from "./API/questapi.js";

let perguntas = [];
let currentIndex = 0;

async function carregarPerguntas() {
  perguntas = await getQuestion();
  mostrarPergunta();
}

let acertos = 0;
let erros = 0;

function atualizarQuantidade() {
  document.getElementById("questao").innerText = `Questão: ${
    currentIndex + 1
  }/${limiteQuestoes}`;
  document.getElementById("acertos").innerText = `Acertos: ${acertos}`;
  document.getElementById("erros").innerText = `Erros: ${erros}`;
}

const limiteQuestoes = 13; // Defina o limite desejado

function mostrarPergunta() {
  if (currentIndex >= limiteQuestoes || currentIndex >= perguntas.length) {
    alert("Fim do quiz!");
    return;
  }
  const p = perguntas[currentIndex];
  document.getElementById("quest").innerHTML = p.pergunta;
  document.getElementById("a").innerHTML = p.respostas[0].texto;
  document.getElementById("b").innerHTML = p.respostas[1].texto;
  document.getElementById("c").innerHTML = p.respostas[2].texto;
  document.getElementById("d").innerHTML = p.respostas[3].texto;
  atualizarQuantidade(); // Atualiza os contadores
}

let resultado = [];
export function checarResposta(indice, event) {
  const perguntaAtual = perguntas[currentIndex];
  const correta = perguntaAtual.respostas[indice].correta;

  if (correta) {
    acertos++;
    resultado.push(10);
    event.target.style.backgroundColor = "green";
  } else {
    erros++;
    event.target.style.backgroundColor = "red";
  }

  // ✅ Exibir a explicação antes de ir pra próxima
  document.getElementById("explicacao").innerText = perguntaAtual.explicacao;
  document.getElementById("explicacao").style.display = "block";

  setTimeout(() => {
    document.getElementById("explicacao").style.display = "none";

    currentIndex++;
    if (currentIndex < limiteQuestoes && currentIndex < perguntas.length) {
      mostrarPergunta();
      document.getElementById("a").style.backgroundColor = "";
      document.getElementById("b").style.backgroundColor = "";
      document.getElementById("c").style.backgroundColor = "";
      document.getElementById("d").style.backgroundColor = "";
    } else {
      atualizarQuantidade();
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("resultado-container").style.display = "block";
      acertos = 0;
      erros = 0;
      currentIndex = 0;
      resultado = [];
      carregarPerguntas();
    }
  }, 3000);  // ✅ Dei um tempo maior para dar tempo da pessoa ler a explicação (3 segundos)
}


window.onload = function () {
  document.getElementById("a").onclick = (e) => checarResposta(0, e);
  document.getElementById("b").onclick = (e) => checarResposta(1, e);
  document.getElementById("c").onclick = (e) => checarResposta(2, e);
  document.getElementById("d").onclick = (e) => checarResposta(3, e);
  carregarPerguntas(); // Inicia o quiz
};
