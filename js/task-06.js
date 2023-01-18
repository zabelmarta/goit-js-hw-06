
const textInput = document.querySelector("#validation-input");
const controlValue = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === controlValue) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});