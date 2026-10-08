const display = document.querySelector(".display-text");
const buttons = document.querySelectorAll(".button");

display.classList.add("flashing");

let value = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent === "C"
    ) {
      value = 0;
      display.textContent = value;
      value = "";
    }

    // prettier-ignore
    else if (
      button.textContent === "="
    ) {
      let calculation = value.trim();

      if (
        calculation.endsWith("+") ||
        calculation.endsWith("-") ||
        calculation.endsWith("*") ||
        calculation.endsWith("/")
      ) {
        return;
      }

      value = eval(calculation);
      value = Number(value.toFixed(10));
      display.textContent = value;
    }

    // prettier-ignore
    else if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/"
    ) {
      value = value + " " + button.textContent + " ";
      display.textContent = value;
    }

    // prettier-ignore
    else if (value.length < 16) {
      value = value + button.textContent;
      display.textContent = value;
    }

    display.classList.remove("flashing");

    console.log(value);
  });
});
