function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div style="font-size:50px;">🌷</div>
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

document.addEventListener("click", (e) => {
  createTulip(Math.random() * 90);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});
