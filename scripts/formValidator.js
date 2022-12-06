const usernameEl = document.getElementById("nameInput");
const emailEl = document.getElementById("emailInput");
const companyEl = document.getElementById("companyInput");
const textAreaEl = document.getElementById("messageInput");
const form = document.getElementById("form");
const sendButton = document.getElementById('send_button')
const gotButton = document.getElementById('got_button')
const successWrapper = document.getElementById('success_wrapper')
const formWrapper = document.getElementById('form_wrapper')

gotButton.addEventListener('click', function () {
  formWrapper.style = 'display: block;'
  successWrapper.style = 'display: none;'
})


const hideForm = () => {
  formWrapper.style = 'display: none;'
  successWrapper.style = 'display: flex;'
}

const checkUsername = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Name cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;
  const message = textAreaEl.value.trim();

  if (!isRequired(message)) {
    showError(textAreaEl, "Message cannot be blank.");
  } else {
    showSuccess(textAreaEl);
    valid = true;
  }

  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const telegramRe = /@[a-zA-Z0-9]*/gm
  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
  return (
    emailRe.test(String(email).toLowerCase()) ||
    telegramRe.test(String(email).toLowerCase())
  )
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const inputContainer = input.parentElement;
  input.classList.add("error");

  const error = inputContainer.querySelector(".error_message");
  error.innerText = message;

  setTimeout(function () {
    input.classList.remove("error");
    error.innerText = "";
  }, 2000);
};

const showSuccess = (input) => {
  const inputContainer = input.parentElement;
  input.classList.remove("error");

  const error = inputContainer.querySelector(".error_message");
  error.innerText = "";
};

form.addEventListener("submit", function (e) {
  // prevent the form submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isMessageValid = checkMessage();

  let isFormValid = isUsernameValid && isEmailValid && isMessageValid;

  let values = {
    name: usernameEl.value.trim(),
    email: emailEl.value.trim(),
    company: companyEl.value.trim(),
    message: textAreaEl.value.trim(),
  }

  // submit to the server if the form is valid
  if (isFormValid) {
    // Send email
    sendEmail(values);
    form.reset();
    hideForm()
  }
});

const sendEmail = async (values) => {
  const API_URL = "http://dexolaapi-env.eba-wjf7rgnv.us-east-1.elasticbeanstalk.com";
  let response = await fetch(`${API_URL}/api/email/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(values)
  });

  await response
    .json()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
    }
  })
);
