document.getElementById("startBtn").addEventListener("click", function () {
  console.log("test");
  this.style.backgroundColor = generateRandomRgb();
  this.style.borderColor = generateRandomRgb();
  setInterval(function () {
    document.getElementById("container").style.backgroundColor =
      generateRandomRgb();
    document.getElementById("my-name").style.color = generateRandomRgb();
  }, 2000);
});
function generateNumber() {
  return Math.random() * 255;
}
function generateRandomRgb() {
  var randomR = generateNumber();
  var randomG = generateNumber();
  var randomB = generateNumber();
  return `rgb(${randomR},${randomG},${randomB})`;
}
