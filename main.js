import "./bootstrap.css";
import "./style.scss";

// Add listener to the submit button
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const allFields = event.target;
  const firstName = allFields[0].value;
  const lastName = allFields[1].value;
  const email = allFields[2].value;
  const mobileNumber = allFields[3].value;
  const subject = allFields[4].value;
  const message = allFields[5].value;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(mobileNumber);
  console.log(subject);
  console.log(message);
});
