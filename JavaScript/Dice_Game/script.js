function start() {
  console.log("Game Started");

  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Play() {
  console.log("Player 1 Playing");
  let Score = Number(document.getElementById("p1Sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  switch (DF) {
    case 1: {
      document.getElementById("p1Dice").src = "image1.png";
      break;
    }
    case 2: {
      document.getElementById("p1Dice").src = "image2.png";
      break;
    }
    case 3: {
      document.getElementById("p1Dice").src = "image3.png";
      break;
    }
    case 4: {
      document.getElementById("p1Dice").src = "image4.png";
      break;
    }
    case 5: {
      document.getElementById("p1Dice").src = "image5.png";
      break;
    }
    case 6: {
      document.getElementById("p1Dice").src = "image6.png";
      break;
    }
    default: {
      document.getElementById("p1Dice").src = "image6.png";
      break;
    }
  }

  // ``  ----- multiline string    String Literals

  if (DF === 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1Sc").innerText = Score;
  }
}

function p2Play() {
  console.log("Player 2 Playing");
  let Score = Number(document.getElementById("p2Sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p2Dice").src = `image${DF}.png`;

  if (DF === 6) {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  } else {
    Score = Score + DF;
    document.getElementById("p2Sc").innerText = Score;
  }
}
