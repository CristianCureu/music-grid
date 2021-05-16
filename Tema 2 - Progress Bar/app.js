const bar = document.getElementById("bar");
const startBtn = document.querySelector(".startBtn");
const loadingText = document.querySelector(".loading");
let i = 0;

function loading() {
  if (i == 0) {
    i = 1;
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        bar.style.width = width + "%";
        loadingText.innerText = "loading " + width + "%";
        if (width >= 100) {
          loadingText.innerText = "Completed";
        }
      }
    }
  }
}

startBtn.addEventListener("click", loading);
