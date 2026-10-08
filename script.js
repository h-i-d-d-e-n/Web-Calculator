const display = document.querySelector(".display-text");
const buttons = document.querySelectorAll(".button");

display.classList.add("flashing");

let value = "";
let result = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent === "C"
    ) {
      value = 0;
      display.textContent = value;
      value = "";
      result = "";
      operator = "";
    }

    // prettier-ignore
    else if (
      button.textContent === "="
    ) {
      if (
        value.endsWith("+") ||
        value.endsWith("-") ||
        value.endsWith("*") ||
        value.endsWith("/")
      ) {
        return;
      }

      if (operator !== "") {
        let number = Number(value);

        if (operator === "+") {
          result = result + number;
        }

        else if (operator === "-") {
          result = result - number;
        }

        else if (operator === "*") {
          result = result * number;
        }

        else if (operator === "/") {
          result = result / number;
        }

        value = Number(result.toFixed(10));
        display.textContent = value;

        result = "";
        operator = "";
      }
    }

    // prettier-ignore
    else if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/"
    ) {
      if (value === "") {
        return;
      }

      if (operator === "") {
        result = Number(value);
      }

      else {
        let number = Number(value);

        if (operator === "+") {
          result = result + number;
        }

        else if (operator === "-") {
          result = result - number;
        }

        else if (operator === "*") {
          result = result * number;
        }

        else if (operator === "/") {
          result = result / number;
        }

        result = Number(result.toFixed(10));
      }

      operator = button.textContent;
      value = "";
      display.textContent = result + " " + operator + " ";
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
