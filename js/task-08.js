const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(userInfo);
    form.reset();
  }
}
