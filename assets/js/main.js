const plusBtns = document.querySelectorAll(".plus");
const deleteBtns = document.querySelectorAll(".delete");

plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.querySelector(".number");
    number.textContent = parseInt(number.textContent) + 1;
  });
});

deleteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.querySelector(".number");
    let count = parseInt(number.textContent);
    if (count > 1) number.textContent = count - 1;
  });
});
