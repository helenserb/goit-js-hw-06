// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputValue = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const onInputChange = (event) =>
  inputValue.value != ""
    ? (nameOutput.textContent = inputValue.value)
    : (nameOutput.textContent = "Anonymous");
    
inputValue.addEventListener("input", onInputChange);