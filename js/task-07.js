const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = inputSize.value + 'px';


const changeSize = () => {
  text.style.fontSize = `${inputSize.value}px`;
};

inputSize.addEventListener('input', changeSize);


