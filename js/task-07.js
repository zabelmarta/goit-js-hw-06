const inputSize = document.querySelector("input#font-size-control");
const text = document.querySelector("#text");

inputSize.addEventListener("change", (size) => {
  text.style.fontSize = `${size.target.value}px`;
});