function button() {
  const bts = document.querySelectorAll("button");
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener(
      "click",
      () => {
        bts[i].style.backgroundColor = "hsl(217, 12%, 63%)";
        bts[i].style.color = "hsl(0, 0%, 100%)";
      },
      { once: true }
    );
    console.log(bts[i]);
  }
}
