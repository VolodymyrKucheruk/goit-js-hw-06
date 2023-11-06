const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", handleBlur);

function handleBlur() {
  const waitedLength = parseInt(this.getAttribute("data-length", 10));
  const currentLength = this.value.trim().length;

  this.classList.remove("valid", "invalid");

  if (currentLength === waitedLength) {
    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
  }
}
