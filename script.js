const start = document.querySelector(".start-text");
while ((start.textContent = "Start")) {
  start.classList.add(".flashing");

  if (start.classList.contains(".flashing")) {
    break;
  }
}
