const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  }

  const obj = { Email: email.value, Password: password.value };
  console.log(obj);

  e.currentTarget.reset();
}