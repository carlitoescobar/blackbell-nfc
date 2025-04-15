document.addEventListener("DOMContentLoaded", () => {
  let taps = 0;
  const tapZone = document.getElementById("tap-zone");
  const inputBlock = document.getElementById("secret-input");

  tapZone.addEventListener("click", () => {
    taps++;
    if (taps >= 5) {
      inputBlock.classList.remove("hidden");
      taps = 0;
    }
  });
});