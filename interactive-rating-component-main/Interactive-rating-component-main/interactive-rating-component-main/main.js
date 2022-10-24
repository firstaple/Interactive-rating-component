function button() {
  for (let i = 0; i < 5; i++) {
    document.write(`<button>${i + 1}</button>`);
    const btn = document.querySelectorAll("button");
    btn[i].addEventListener("click", (e) => {
      e.target.style.color = "hsl(0, 0%, 100%)";
      e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
      e.preventDefault();
    });
  }
  return button;
}
