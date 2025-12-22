function calculateBill() {
  const km = Number(document.getElementById("km").value);
  const errorMsg = document.getElementById("errorMsg");

  if (isNaN(km) || km < 0) {
    errorMsg.classList.remove("d-none");
    document.getElementById("resultCard").classList.add("d-none");
    return;
  } else {
    errorMsg.classList.add("d-none");
  }

  let slab1Km = 0,
    slab2Km = 0,
    slab3Km = 0;
  let slab1Amt = 0,
    slab2Amt = 0,
    slab3Amt = 0;

  if (km <= 10) {
    slab1Km = km;
  } else if (km <= 100) {
    slab1Km = 10;
    slab2Km = km - 10;
  } else {
    slab1Km = 10;
    slab2Km = 90;
    slab3Km = km - 100;
  }

  slab1Amt = (slab1Km * 11).toFixed(2);
  slab2Amt = (slab2Km * 10).toFixed(2);
  slab3Amt = (slab3Km * 9).toFixed(2);

  const total = (
    Number(slab1Amt) +
    Number(slab2Amt) +
    Number(slab3Amt)
  ).toFixed(2);

  document.getElementById("slab1Text").textContent = `${slab1Km.toFixed(
    2
  )} km × Rs.11`;
  document.getElementById("slab1Amt").textContent = `Rs.${slab1Amt}`;

  document.getElementById("slab2Text").textContent = `${slab2Km.toFixed(
    2
  )} km × Rs.10`;
  document.getElementById("slab2Amt").textContent = `Rs.${slab2Amt}`;

  document.getElementById("slab3Text").textContent = `${slab3Km.toFixed(
    2
  )} km × Rs.9`;
  document.getElementById("slab3Amt").textContent = `Rs.${slab3Amt}`;
  document.getElementById("totalKm").textContent = `${km.toFixed(2)} km`;

  document.getElementById("totalAmount").textContent = total;
  document.getElementById("resultCard").classList.remove("d-none");
}