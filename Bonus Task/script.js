function search() {
  const state = document.getElementById("search").value;
  if (state === "select") return;

  const map = document.getElementById("Map");

  const flag = document.createElement("img");
  flag.src =
    "https://tse1.mm.bing.net/th/id/OIP.Xh2vVpc6mC3cKTY4uNk95gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";
  flag.className = "flag";
  flag.style.position = "absolute";
  flag.style.width = "25px";
  flag.title = state;

  const pos = {
    "Rajasthan-Capital:Jaipur": { top: 230, left: 140 },
    "Gujarat-Capital:Gandhinagar": { top: 280, left: 100 },
    "Maharashtra-Capital:Mumbai": { top: 350, left: 160 },
    "Madhya Pradesh-Capital:Bhopal": { top: 280, left: 200 },
    "Uttar Pradesh-Capital:Lucknow": { top: 200, left: 250 },
    "Punjab-Capital:Chandigarh": { top: 140, left: 170 },
    "Goa-Capital:Panaji": { top: 410, left: 130 },
    "Haryana-Capital:Chandigarh": { top: 160, left: 190 },
    "Bihar-Capital:Patna": { top: 230, left: 340 },
    "West Bengal-Capital:Kolkata": { top: 280, left: 370 },
    "Tamil Nadu-Capital:Chennai": { top: 490, left: 210 },
    "Kerala-Capital:Thiruvananthapuram": { top: 500, left: 165 },
    "Karnataka-Capital:Bengaluru": { top: 420, left: 150 },
    "Andhra Pradesh-Capital:Amaravati": { top: 430, left: 210 },
    "Telangana-Capital:Hyderabad": { top: 370, left: 230 },
    "Odisha-Capital:Bhubaneswar": { top: 330, left: 310 },
    "Chhattisgarh-Capital:Raipur": { top: 310, left: 270 },
    "Jharkhand-Capital:Ranchi": { top: 270, left: 320 },
    "Assam-Capital:Dispur": { top: 215, left: 435 },
    "Arunachal Pradesh-Capital:Itanagar": { top: 190, left: 460 },
    "Nagaland-Capital:Kohima": { top: 215, left: 485 },
    "Manipur-Capital:Imphal": { top: 240, left: 480 },
    "Mizoram-Capital:Aizawl": { top: 270, left: 460 },
    "Tripura-Capital:Agartala": { top: 260, left: 440 },
    "Meghalaya-Capital:Shillong": { top: 230, left: 420 },
    "Sikkim-Capital:Gangtok": { top: 200, left: 380 },
    "Uttarakhand-Capital:Dehradun": { top: 150, left: 230 },
    "Himachal Pradesh-Capital:Shimla": { top: 110, left: 190 },
    "Jammu and Kashmir-Capital: Srinagar": { top: 85, left: 170 },
    "Ladakh-Capital:Leh": { top: 70, left: 200 },
    "Delhi-Capital:New Delhi": { top: 180, left: 195 },
  };

  const p = pos[state];
  if (!p) return;

  flag.style.top = p.top + "px";
  flag.style.left = p.left + "px";
  map.appendChild(flag);
}

function clearAll() {
  const flags = document.querySelectorAll(".flag");
  flags.forEach((flag) => flag.remove());

  document.getElementById("search").value = "select";
}
