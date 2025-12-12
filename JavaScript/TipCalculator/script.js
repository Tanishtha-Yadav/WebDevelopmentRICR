function calculate() {
  const amt = Number(document.getElementById("billAmnt").value.trim());
  const srvc = Number(document.getElementById("service").value);
  const prsn = Number(document.getElementById("persons").value.trim());

  if (!amt || !srvc || !prsn) {
    document.getElementById("result").innerText = "Enter all Values Properly!";
    return;
  }

  const rslt = (amt * srvc) / 100 / prsn;

  document.getElementById("result").innerText = `Tip Amount: ${rslt}Rs. each`;

  document.getElementById("billAmnt").value = "";
  document.getElementById("service").value = "";
  document.getElementById("persons").value = "";
}
