document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    let i = Number(input.value);
    let f = i;
    for (let j = i - 1; j > 0; j--) {
      f = f * j;
    }
    console.log(f);
    result.innerHTML = i + "! = " + f;
  });
});
