const bgColor = document.getElementById("bg");
bgColor.addEventListener("change", () => changeBgColor(bgColor.value));

function changeBgColor(bg) {
  document.getElementById("inner").style.backgroundColor = bg;
}

const hColor = document.getElementById("head2");
hColor.addEventListener("change", () => changeColor(hColor.value));

function changeColor(head2) {
  document.getElementById("head").style.color = head2;
}

const pColor = document.getElementById("para2");
pColor.addEventListener("change", () => changeColorPara(pColor.value));

function changeColorPara(para2) {
  document.getElementById("para").style.color = para2;
}
