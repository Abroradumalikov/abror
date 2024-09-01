const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const userError = document.querySelector(".user-error");
const userPassword = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const box = document.querySelector(".box");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateUserName();
  validateUserEmail();
  validatepasswordError();
});
userName.addEventListener("input", () => {
  validateUserName();
});
function validateUserName() {
  const userNameValue = userName.value.trim();

  if (
    userNameValue.length < 3 ||
    userNameValue.length > 25 ||
    !/[A-Z]/.test(userNameValue)
  ) {
    userError.classList.add("active");
    userName.classList.remove("success-input");
    userName.classList.add("error-input");
  } else {
    userError.classList.remove("active");
    userName.classList.add("error-input");
    userName.classList.add("success-input");
  }
}
const userEmail = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
userEmail.addEventListener("input", () => {
  validateUserEmail();
});
function validateUserEmail() {
  const emailVelue = userEmail.value.trim();
  const chekUser = userRegex(emailVelue);

  if (!userRegex(emailVelue)) {
    emailError.classList.add("active");
    userEmail.classList.remove("success-input");
    userEmail.classList.add("error-input");
  } else {
    emailError.classList.remove("active");
    userEmail.classList.add("error-input");
    userEmail.classList.add("success-input");
  }
}

function userRegex(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
}
function validatepasswordError() {
  const passwordVelue = userPassword.value.trim();
  if (passwordVelue.length < 8 || !/[A-Z]/.test(passwordVelue)) {
    passwordError.classList.add("active");
    box.classList.add("box-error");
    box.classList.remove("box-success");
  } else {
    passwordError.classList.remove("active");
    box.classList.remove("box-error");
    box.classList.add("box-success");
  }
}

box.addEventListener("input", () => {
  validatepasswordError();
});
const img = document.querySelector("img");
const inp = document.querySelector(".input-img");
let n = 0;
img.addEventListener("click", () => {
  n++;
  if (n % 2 != 0) {
    inp.type = "text";
    img.src = "./yes.svg";
  } else {
    inp.type = "password";
    img.src = "./no.svg";
  }
});
document
  .querySelector("#confirm-password")
  .addEventListener("input", validatePasswordError);

function validatePasswordError() {
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirm-password");
  const passwordError = document.querySelector(".password-error");
  const confirmError = document.querySelector(".confirm-error");

  // Regular expression for password validation
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/;

  // Validate password strength
  if (!passwordPattern.test(password.value)) {
    passwordError.classList.remove("active");
    password.classList.add("error-input");
    password.classList.remove("success-input");
  } else {
    passwordError.classList.add("active");
    password.classList.remove("error-input");
    password.classList.add("success-input");
  }

  // Validate confirm password
  if (password.value !== confirm.value) {
    confirmError.classList.add("active");
    confirm.classList.add("error-input");
    confirm.classList.remove("success-input");
  } else {
    confirmError.classList.remove("active");
    confirm.classList.remove("error-input");
    confirm.classList.add("success-input");
  }
}
