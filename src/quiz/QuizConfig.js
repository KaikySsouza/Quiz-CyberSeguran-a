
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

