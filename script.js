function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div style="font-size:300px;">🌷</div>
  `;

  document.body.appendChild(tulip);

  // auto remove after some time (clean look)
  setTimeout(() => tulip.remove(), 8000);
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

/* CLICK = flowers + hearts */
document.addEventListener("click", (e) => {
  createTulip(Math.random() * 90);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

/* AUTO FLOATING FLOWERS */
setInterval(() => {
  createTulip(Math.random() * 90);
}, 1500);
