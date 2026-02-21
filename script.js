let display = document.querySelector(".display");
let clearbtn = document.querySelector(".clearbtn");
let operator = document.querySelector(".operator");
let btn = document.querySelector("button");
let equal = document.querySelector(".equal");
function appendvalue(text) {
  if (
    display.innerText === "0" ||
    display.innerText === "Error❌" ||
    display.innerText === "Infinity"
  ) {
    display.innerText = text;
    return;
  } else {
    display.innerText = `${display.innerText}${text}`;
  }
}
function cleardisplasy() {
  display.innerText = "0";
}
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error❌";
  }
}
