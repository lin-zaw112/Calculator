let operators = ["+", "-", "*", "/", "="];
let keyPad = document.querySelector(".keypad");
let display = document.querySelector(".display-box");
let showInDisplay = (num) => (display.innerText += num);
let calc = (_) => (display.innerText = eval(display.innerText));
for (let i = 0; i < 10; i++) {
  keyPad.innerHTML += `<button class="key" onClick={showInDisplay(${i})}>${i}</button>`;
}

operators.forEach((ope) => {
  switch (ope) {
    case "=":
      keyPad.innerHTML += `<button class="key" onClick={calc()}>${ope}</button>`;
      break;

    default:
      keyPad.innerHTML += `<button class="key" onClick={showInDisplay('${ope}')}>${ope}</button>`;
      break;
  }
});
