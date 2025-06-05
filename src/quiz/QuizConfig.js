
//CONFIG

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



  //FULLSCREEN 

  document.querySelector(".fullscreen").addEventListener("click", function () {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); 
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); 
      }
    } else {
      
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  });


// Sistema de Fonte Size

  function AumentarFontSize() {
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = (currentSize + 2) + "px";
  }
 
    function DiminuirFontSize() {
    const body = document.body;
    const currentSize = parseFloat(getComputedStyle(body).fontSize);
    body.style.fontSize = (currentSize - 2) + "px";
  }

  