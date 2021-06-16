import "./bootstrap.css";
import "./style.scss";

// Add listener to the submit button

// Bad Example

// const form = document.getElementById("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const allFields = event.target;
//   const firstName = allFields[0].value;
//   const lastName = allFields[1].value;
//   const email = allFields[2].value;
//   const mobileNumber = allFields[3].value;
//   const subject = allFields[4].value;
//   const message = allFields[5].value;

//   console.log(firstName);
//   console.log(lastName);
//   console.log(email);
//   console.log(mobileNumber);
//   console.log(subject);
//   console.log(message);
// });

// Good Example

// const form = document.getElementById("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(document.getElementById("form"));
//   const fields = {};

//   for (const field of formData.entries()) {
//     fields[field[0]] = field[1];
//   }
//   const { firstName, lastName, email, mobileNumber, subject, message } = fields;

//   console.log(firstName);
//   console.log(lastName);
//   console.log(email);
//   console.log(mobileNumber);
//   console.log(subject);
//   console.log(message);
// });

// Great Example

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));
  const { firstName, lastName, email, mobileNumber, subject, message } =
    formData;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(mobileNumber);
  console.log(subject);
  console.log(message);
});
