function on() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

function blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}

const userColor = document.getElementById("color"); 
userColor.addEventListener("change", () => changeBulbColor(userColor.value));

function changeBulbColor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}

function SB_control() {
  const btn = document.getElementById("SB_btn");
  if (btn.innerText === "On") {
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
  } else if (btn.innerText === "Off") {
    document.getElementById("SB_btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

function SB_control2() {
  document.getElementById("smartBulb").classList.toggle("on");
}
