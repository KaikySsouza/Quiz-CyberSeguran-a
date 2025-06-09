function ConfigNota() {
  document.addEventListener("DOMContentLoaded", () => {
    const nota = document.getElementById("nota");
    const fecharNota = document.getElementById("fecharNota");
    const quiz = document.getElementById("quiz");

    fecharNota.addEventListener("click", () => {
      nota.classList.add("fade-out");
      quiz.classList.remove("hidden");
      quiz.classList.add("fade-in");

      setTimeout(() => {
        nota.classList.add("hidden");
        nota.classList.remove("fade-out");
      }, 1000);
    });
  });
}
document.getElementById("nota").addEventListener("click", async () => {});

ConfigNota();
