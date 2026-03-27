function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div class="stem"></div>
    <div class="leaf left"></div>
    <div class="leaf right"></div>
    <div class="tulip-head"></div>
  `;

  document.body.appendChild(tulip);
}

function createHeart(x, y) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

/* SINGLE CLICK EVENT ONLY */
document.addEventListener("click", (e) => {
  createTulip(Math.random() * 90);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});
