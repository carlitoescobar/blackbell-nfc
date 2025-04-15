document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("main").classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    const input = document.getElementById("secret-input");
    if (input) input.classList.remove("hidden");
  }, 3000);
});