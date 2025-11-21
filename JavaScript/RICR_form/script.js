function submitForm() {
  console.log("Form Submitted");

  const name = document.getElementById("personName").value;
  const phone = document.getElementById("contactNumber").value;
  const email = document.getElementById("email").value;
  const qual = document.getElementById("qualification").value;
  const college = document.getElementById("collegeSchool").value;
  const branch = document.getElementById("branch").value;


  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Qualification:", qual);
  console.log("College:", college);
  console.log("Branch:", branch);

  alert("Form submitted successfully!");

  document.getElementById("personName").value = " ";
  document.getElementById("contactNumber").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("qualification").value = " ";
  document.getElementById("collegeSchool").value = " ";
  document.getElementById("branch").value = " ";

}
