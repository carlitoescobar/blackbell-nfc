// 🧠 Oracle Boot Sequence v39

document.addEventListener("DOMContentLoaded", () => {
  console.log("🧠 Oracle elements found. Initializing...");

  // === Secret Tap Zone ===
  let taps = 0;
  const tapZone = document.getElementById("tap-zone");
  const inputBlock = document.getElementById("secret-input");
  const phraseInput = document.getElementById("secret-phrase");

  if (tapZone && inputBlock && phraseInput) {
    tapZone.addEventListener("click", () => {
      taps++;
      if (taps >= 5) {
        inputBlock.classList.remove("hidden");
        phraseInput.focus();
        taps = 0;
      }
    });

    phraseInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const phrase = e.target.value.trim().toLowerCase();
        if (phrase === "i see everything") {
          window.location.href = "status/";
        } else {
          phraseInput.value = "";
        }
      }
    });
  }

  // === CAPCOM / Konami Code → Redirect to /blacksite ===
  const capcomCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let inputSequence = [];

  document.addEventListener("keydown", (e) => {
    inputSequence.push(e.key);
    if (inputSequence.length > capcomCode.length) {
      inputSequence.shift();
    }

    if (inputSequence.join("") === capcomCode.join("")) {
      console.log("🕹️ CAPCOM SEQUENCE ACCEPTED");
      window.location.href = "blacksite/";
    }
  });
});
