function bt(char) {
  if (char === "=") {
    try {
      document.getElementById("display").value = eval(
        document.getElementById("display").value
      );
    } catch (error) {
      alert("Invalid Expression");
      document.getElementById("display").value = " ";
    }
  } else if (char === "clear") {
    document.getElementById("display").value = " ";
  } else {
    document.getElementById("display").value =
      document.getElementById("display").value + char;
  }
}
