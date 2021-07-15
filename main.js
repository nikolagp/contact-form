import "./bootstrap.css";
import "./style.scss";

const form = document.getElementById("form");

// Functions

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
    console.log(isFirstNameValid(firstName).msg);
    return false;
  } else if
  (!isLastNameValid(lastName).isValid) {
    console.log(isLastNameValid(lastName).msg);
    return false;
  } else if
  (!isEmailValid(email).isValid) {
    console.log(isEmailValid(email).msg)
    return false;
  } else if 
  (!isPhoneValid(mobileNumber).isValid) {
    console.log(isPhoneValid(mobileNumber).msg)
    return false;
  } else if
  (!isSubjectValid(subject).isValid) {
    console.log(isSubjectValid(subject).msg)
    return false;
  }
  return true;
}

// First Name Validation

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

// Last Name Validation

function isLastNameValid(lastName) {
  if (!isRequiredFieldValid(lastName)) {
    return {
      isValid: false,
      msg: "The last name is required!",
    };
  }

  if (!isMaxNumberValid(lastName, 20)) {
    return {
      isValid: false,
      msg: "The last name needs to be less than 20 characters!",
    };
  }

  if (!isAlphaCharacterValid(lastName)) {
    return {
      isValid: false,
      msg: "Only Alpha characters are allowed!",
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
  return {
    isValid: true,
  }
}

