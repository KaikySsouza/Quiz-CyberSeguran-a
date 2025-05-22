const quest = [
  {
    question: "Qual dessas opções é a mais segura para criar uma senha forte?",
    options: [
      {text: "usar o nome do seu pet e sua data de nascimento",isCorrect: false, },
      { text: "12345678", isCorrect: false }, 
      {text: "uma sequência aleatória com letras maiúsculas, minúsculas, números e símbolos", isCorrect: true,},
      { text: "senha123", isCorrect: false },
    ],
  },
  {
    question: "Qual dessas opções é um exemplo de antivírus?",

    options: [
      { text: "Google Chrome", isCorrect: false },
      { text: "Windows Defender", isCorrect: true },
      { text: "WhatsApp", isCorrect: false },
      { text: "Photoshop", isCorrect: false },
    ],
  },
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
  const question = quest[index];
  document.getElementById("quest").innerHTML = question.question;
  document.getElementById("a").innerHTML = question.options[0].text;
  document.getElementById("b").innerHTML = question.options[1].text;
  document.getElementById("c").innerHTML = question.options[2].text;
  document.getElementById("d").innerHTML = question.options[3].text;
}

loadQuestion(currentQuestionIndex);

document.getElementById("a").addEventListener("click", () => checkAnswer(0));
document.getElementById("b").addEventListener("click", () => checkAnswer(1));
document.getElementById("c").addEventListener("click", () => checkAnswer(2));
document.getElementById("d").addEventListener("click", () => checkAnswer(3));

function checkAnswer(optionIndex) {
    const buttons = [
      document.getElementById("a"),
      document.getElementById("b"),
      document.getElementById("c"),
      document.getElementById("d"),
    ];
  
    
    if (quest[currentQuestionIndex].options[optionIndex].isCorrect) {
      buttons[optionIndex].style.backgroundColor = "#2ECC71"; 
      alert("Você acertou!");
    } else {
      buttons[optionIndex].style.backgroundColor = "#FF4C4C"; 
      alert("Você errou!");
    }
  
   
    setTimeout(() => {
      
      buttons.forEach((button) => (button.style.backgroundColor = ""));
  
    
      currentQuestionIndex++;
      if (currentQuestionIndex < quest.length) {
        loadQuestion(currentQuestionIndex);
      } else {
        alert("Quiz finalizado!");
      }
    }, 1000);
  }