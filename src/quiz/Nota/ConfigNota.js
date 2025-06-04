document.addEventListener('DOMContentLoaded', () => {
  const nota = document.getElementById('nota');
  const fecharNota = document.getElementById('fecharNota');
  const quiz = document.getElementById('quiz');

  fecharNota.addEventListener('click', () => {
    nota.classList.add('fade-out'); 

    
    setTimeout(() => {
      nota.classList.add('hidden');
      quiz.classList.remove('hidden');
      nota.classList.remove('fade-out');
    }, 1000); 
  });
});
