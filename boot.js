document.addEventListener("DOMContentLoaded", () => {
  let taps = 0;
  const tapZone = document.getElementById("tap-zone");
  const inputBlock = document.getElementById("secret-input");
  const phraseInput = document.getElementById("secret-phrase");

  tapZone.addEventListener("click", () => {
    taps++;
    if (taps >= 5) {
      inputBlock.classList.remove("hidden");
      taps = 0;
    }
  });

  phraseInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const phrase = e.target.value.trim().toLowerCase();
      if (phrase === "i see everything") {
        window.location.href = "status/";
      } else {
        alert("Unrecognized phrase.");
      }
      e.target.value = "";
    }
  });
});