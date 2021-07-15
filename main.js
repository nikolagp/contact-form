import "./bootstrap.css";
import "./style.scss";

// Add listener to the submit button

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const objFormData = Object.fromEntries(new FormData(event.target));

  if (!isValid(objFormData)) {
    return;
  } else {
    console.log("Success!");
  }
});

function isValid(objFormData) {
  const { firstName, lastName, email, mobileNumber, subject, message } =
    objFormData;

  if (!isFirstNameValid(firstName).isValid) {
    console.log(isFirstNameValid(firstName).msg);
    return false;
  }
  return true;
}

function isFirstNameValid(firstName) {
  if (!isRequiredFieldValid(firstName)) {
    return {
      isValid: false,
      msg: "The first name is required!",
    };
  }

  if (!isMaxNumberValid(firstName, 20)) {
    return {
      isValid: false,
      msg: "The first name needs to be less than 20 characters!",
    };
  }

  if (!isAlphaCharacterValid(firstName)) {
    return {
      isValid: false,
      msg: "Only Alpha characters are allowed!",
    };
  }
  return {
    isValid: true,
  };
}

function isRequiredFieldValid(field) {
  if (!field) return false;
  return true;
}

function isMaxNumberValid(field, limit) {
  if (!(field.length <= limit)) return false;
  return true;
}

function isAlphaCharacterValid(field) {
  if (!/^[a-zA-Z]*$/.test(field)) return false;
  return true;
}
