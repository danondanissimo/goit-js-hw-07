const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   loginForm.elements;
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email.length === 0 || password.length === 0) {
    alert("All form fields must be filled in");
  } else {
    const loginDetails = { email, password };

    console.log(loginDetails);
  }
  loginForm.reset();
});
