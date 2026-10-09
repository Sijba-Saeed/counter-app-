let count = 0;

const counterText = document.getElementById("countertext");
const addbtn = document.getElementById("addbtn");
const minusbtn = document.getElementById("minusbtn");
const resetbtn = document.getElementById("resetbtn");

addbtn.addEventListener("click", () => {
  count = count + 1;
  counterText.innerText = count;
});

minusbtn.addEventListener("click", () => {
  count = count - 1;
  counterText.innerText = count;
});

resetbtn.addEventListener("click", () => {
  count = 0;
  counterText.innerText = count;
});
