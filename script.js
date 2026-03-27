function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div style="font-size:40vw;">🌷</div>
  `;

  document.body.appendChild(tulip);

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

/* Click = hearts + tulips */
document.addEventListener("click", (e) => {
  createTulip(Math.random() * 90);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

/* Auto flowers */
setInterval(() => {
  createTulip(Math.random() * 90);
}, 1500);

/* Popup close */
function closePopup() {
  document.getElementById("popup").style.display = "none";

  // ensure music plays after interaction (mobile restriction)
  document.getElementById("music").play();
}
