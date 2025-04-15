console.log("🧠 Oracle boot.js initializing...");

let taps = 0;
const tapZone = document.getElementById("tap-zone");
const inputBlock = document.getElementById("secret-input");
const phraseInput = document.getElementById("secret-phrase");

if (tapZone && inputBlock && phraseInput) {
  // Bind tap zone click
  tapZone.addEventListener("click", () => {
    taps++;
    if (taps >= 5) {
      inputBlock.classList.remove("hidden");
      phraseInput.focus();
      taps = 0;
    }
  });

  // Bind secret phrase detection
  phraseInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const phrase = e.target.value.trim().toLowerCase();
      if (phrase === "i see everything") {
        console.log("🔓 Access granted: Redirecting...");
        window.location.href = "status/";
      } else {
        console.log("❌ Access denied.");
      }
      e.target.value = "";
    }
  });

  console.log("✅ Boot.js fully armed and operational.");
} else {
  console.warn("⚠️ Missing one or more key elements:", {
    tapZone,
    inputBlock,
    phraseInput,
  });
}
