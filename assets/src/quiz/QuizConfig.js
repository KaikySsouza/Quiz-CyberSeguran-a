function toggleConfigMenu() {
  const configBox = document.getElementById("configBox");
  if (configBox.style.display === "block") {
    configBox.style.display = "none";
  } else {
    configBox.style.display = "block";
  }
}

document
  .querySelector(".rotating-image")
  .addEventListener("click", function () {
    this.style.transform =
      this.style.transform === "rotate(360deg)"
        ? "rotate(0deg)"
        : "rotate(360deg)";
  });
