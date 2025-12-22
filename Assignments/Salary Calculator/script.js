function calculateGrossSalary(basic) {
  let hra = 0,
    da = 0;

  if (basic < 1500) {
    hra = basic * 0.1;
    da = basic * 0.9;
  } else {
    hra = 500;
    da = basic * 0.98;
  }

  let gross = basic + hra + da;

  return { basic, hra, da, gross };
}

function handleCalculate() {
  const input = document.getElementById("basicSalary");
  const errorMsg = document.getElementById("errorMsg");
  const basic = Number(input.value);

  if (isNaN(basic) || basic < 0 || input.value === "") {
    errorMsg.classList.remove("d-none");
    document.getElementById("resultCard").classList.add("d-none");
    return;
  } else {
    errorMsg.classList.add("d-none");
  }

  const result = calculateGrossSalary(basic);

  document.getElementById("resBasic").textContent = `₹${result.basic.toFixed(
    2
  )}`;
  document.getElementById("resHra").textContent = `₹${result.hra.toFixed(2)}`;
  document.getElementById("resDa").textContent = `₹${result.da.toFixed(2)}`;
  document.getElementById("resGross").textContent = `₹${result.gross.toFixed(
    2
  )}`;

  document.getElementById("resultCard").classList.remove("d-none");
}

function resetForm() {
  document.getElementById("basicSalary").value = "";
  document.getElementById("errorMsg").classList.add("d-none");
  document.getElementById("resultCard").classList.add("d-none");
}