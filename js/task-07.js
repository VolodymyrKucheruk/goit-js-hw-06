const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", changingFontSize);

function changingFontSize() {
  text.style.fontSize = fontSizeControl.value + "px";
}
