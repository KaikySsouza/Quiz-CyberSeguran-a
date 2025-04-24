const quest = [
    {
      question: "Qual dessas opções é a mais segura para criar uma senha forte?",
      options: [
        { text: "usar o nome do seu pet e sua data de nascimento", isCorrect: false },
        { text: "12345678", isCorrect: false },
        { text: "uma sequência aleatória com letras maiúsculas, minúsculas, números e símbolos", isCorrect: true },
        { text: "senha123", isCorrect: false },
      ],
    },
  ];
  
  console.log(quest[0].question);
  
  document.getElementById("quest").innerHTML = quest[0].question;
  document.getElementById("a").innerHTML = quest[0].options[0].text;
  document.getElementById("b").innerHTML = quest[0].options[1].text;
  document.getElementById("c").innerHTML = quest[0].options[2].text;
  document.getElementById("d").innerHTML = quest[0].options[3].text;
  
  document.getElementById("a").onclick = () => {
    if (quest[0].options[0].isCorrect) {
      document.getElementById("a").style.backgroundColor = "green";
    } else {
      document.getElementById("a").style.backgroundColor = "red";
    }
  };
  
  document.getElementById("b").onclick = () => {
    if (quest[0].options[1].isCorrect) {
      document.getElementById("b").style.backgroundColor = "green";
    } else {
      document.getElementById("b").style.backgroundColor = "red";
    }
  };
  
  document.getElementById("c").onclick = () => {
    if (quest[0].options[2].isCorrect) {
      document.getElementById("c").style.backgroundColor = "green";
    } else {
      document.getElementById("c").style.backgroundColor = "red";
    }
  };
  
  document.getElementById("d").onclick = () => {
    if (quest[0].options[3].isCorrect) {
      document.getElementById("d").style.backgroundColor = "green";
    } else {
      document.getElementById("d").style.backgroundColor = "red";
    }
  };