import "./bootstrap.css";
import "./style.scss";

const form = document.getElementById("form");
const errorMsgShow = document.createElement('div');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#first-name');
const mobileNumberInput = document.querySelector('#mobile-number');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

// Functions
//Old Function for showing Error msg
// const validateInputs = () => {
//   if(!nameInput.value) {
//     nameInput.nextElementSibling.classList.remove('hidden');
//   }
// }

// == Show Error == //
// const showError = (input, message) => {
//   // get the form-field element
//   const formGroup = input.parentElement;
//   // add the error class
//   formGroup.classList.remove('success');
//   formGroup.classList.add('error');

//   // show the error message
//   const error = formGroup.querySelector('small');
//   error.textContent = message;
// };

// const showSuccess = (input) => {
//   // get the form-field element
//   const formGroup = input.parentElement;

//   // remove the error class
//   formGroup.classList.remove('error');
//   formGroup.classList.add('success');

//   // hide the error message
//   const error = formGroup.querySelector('small');
//   error.textContent = '';
// }

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

function validateEmail(field) {
 if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(field)) return false;
  return true;
}

function validatePhone(number) {
  if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) return false;
  return true;
}

// Add listener to the submit button

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const objFormData = Object.fromEntries(new FormData(event.target));

  if (!isValid(objFormData)) {
    return;
  } else {
    console.log("Success!");
  }
});

// Form Validation

function isValid(objFormData) {
  const { firstName, lastName, email, mobileNumber, subject, message } =
    objFormData;

  if (!isFirstNameValid(firstName).isValid) {
    return false;
  } else if
  (!isLastNameValid(lastName).isValid) {
    return false;
  } else if
  (!isEmailValid(email).isValid) {
    return false;
  } else if 
  (!isPhoneValid(mobileNumber).isValid) {
    return false;
  } else if
  (!isSubjectValid(subject).isValid) {
    return false;
  } else if 
  (!isMessageValid(message).isValid) {
    return false;
  }
  return true;
  
}

// = First Name Validation = //

//== Option One with textContent and innerHTML == //
function isFirstNameValid(firstName) {
  const errorMsgShow = document.createElement('div');
  const referenceNode = document.getElementById('first-name');
  errorMsgShow.classList.add('error-msg');
  if (!isRequiredFieldValid(firstName)) {
    const text = "The first name is required";
    errorMsgShow.textContent = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  } else {
    errorMsgShow.textContent = '';
  }

  if (!isMaxNumberValid(firstName, 20)) {
    const text = "The first name needs to be less than 20 characters!";
    errorMsgShow.innerHTML = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  }

  if (!isAlphaCharacterValid(firstName)) {
    const text = "Only Alpha characters are allowed!";
    errorMsgShow.innerHTML = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

// Last Name Validation

function isLastNameValid(lastName) {
  // const errorMsgShow = document.createElement('div');
  const referenceNode = document.getElementById('last-name');
  errorMsgShow.classList.add('error-msg');
  if (!isRequiredFieldValid(lastName)) {
    const text = "The last name is required!";
    errorMsgShow.innerHTML = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  }

  if (!isMaxNumberValid(lastName, 20)) {
    const text = "The last name needs to be less than 20 characters!";
    errorMsgShow.innerHTML = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  }

  if (!isAlphaCharacterValid(lastName)) {
    const text = "Only Alpha characters are allowed!";
    errorMsgShow.innerHTML = text;
    referenceNode.after(errorMsgShow);
    return {
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

// Email Validation
function isEmailValid(email) {
  if (!isRequiredFieldValid(email)) {
    return {
      isValid: false,
      msg: "The email is required!",
    };
  };

  if(!validateEmail(email)) {
    return {
      isValid: false,
      msg: "Please insert a valid email address",
    }
  };

  return {
    isValid: true,
  };
}

// Phone number
function isPhoneValid(mobileNumber) {
  if(!isRequiredFieldValid(mobileNumber)) {
    return {
      isValid: false,
      msg: "Please insert a phone number",
    }
  };

  if(!validatePhone(mobileNumber)) {
    return {
      isValid: false,
      msg: "Please insert a valid US phone number"
    }
  }
  return {
    isValid: true,
  };
}

// Subject
function isSubjectValid(subject) {
  if(!isRequiredFieldValid(subject)) {
    return {
      isValid: false,
      msg: "Please insert subject",
    }
  };

  if(!isMaxNumberValid(subject, 20)) {
    return {
      isValid: false,
      msg: "The subject needs to be less than 20 characters"
    }
  }
    return {
      isValid: true,
    };
  };

  // Message
function isMessageValid(message) {
  if(!isRequiredFieldValid(message)) {
    return {
      isValid: false,
      msg: "Please insert message",
    }
  };

  if(!isMaxNumberValid(subject, 200)) {
    return {
      isValid: false,
      msg: "The message needs to be less than 200 characters"
    }
  }
    return {
      isValid: true,
    };
  };