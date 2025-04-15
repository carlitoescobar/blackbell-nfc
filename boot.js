// 🔥 Booting Oracle boot.js
(function () {
  let taps = 0;

  function init() {
    const tapZone = document.getElementById("tap-zone");
    const inputBlock = document.getElementById("secret-input");
    const phraseInput = document.getElementById("secret-phrase");

    if (!tapZone || !inputBlock || !phraseInput) {
      console.warn("⚠️ Missing elements:", {
        tapZone,
        inputBlock,
        phraseInput,
      });
      return;
    }

    console.log("🧠 Oracle elements found. Initializing...");

    tapZone.addEventListener("click", () => {
      taps++;
      console.log(`🖱️ Tap registered: ${taps}`);
      if (taps >= 5) {
        inputBlock.classList.remove("hidden");
        phraseInput.focus();
        taps = 0;
        console.log("🔓 Secret input revealed.");
      }
    });

    phraseInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const phrase = e.target.value.trim().toLowerCase();
        console.log(`🔍 Entered phrase: "${phrase}"`);
        if (phrase === "i see everything") {
          console.log("🧬 Code accepted. Redirecting to status...");
          window.location.href = "status/";
        } else {
          console.log("🚫 Incorrect phrase.");
        }
        e.target.value = "";
      }
    });
  }

  // Wait for the DOM to be fully parsed before running
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
