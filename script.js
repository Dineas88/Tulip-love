function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div class="leaf left"></div>
    <div class="leaf right"></div>
    <div class="stem"></div>
    <div class="petal p1"></div>
    <div class="petal p2"></div>
    <div class="petal p3"></div>
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

/* CLICK ANYWHERE */
document.addEventListener("click", (e) => {
  createTulip(Math.random() * 90);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

/* AUTO SHOW WHEN OPEN */
window.onload = () => {
  createTulip(50);
};
