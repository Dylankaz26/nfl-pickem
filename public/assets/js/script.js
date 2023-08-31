function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
    e.preventDefault(); // Prevent the default form submission
  console.log('Login form submitted');
  console.log('Username:', document.getElementById('login_username').value);
  console.log('Password:', document.getElementById('login_psw').value);
    // Perform your AJAX/Fetch login
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_psw').value
    }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Process the login response
        if (data.success) {
          // Redirect the user to the homepage or perform other actions for successful login
          window.location.href = "/homepage.html";
        } else {
          // Show an error message for unsuccessful login
          setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occur during the fetch request, if needed
      });
  

document.querySelectorAll(".form__input").forEach(inputElement => {
  inputElement.addEventListener("blur", e => {
    if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
      setInputError(inputElement, "Username must be at least 8 characters in length");
    }
  });
inputElement.addEventListener("input", e => {
  clearInputError(inputElement);
    });
  });
});
});
