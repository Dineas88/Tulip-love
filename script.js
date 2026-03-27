let positions = [];
let maxTulips = 8; // limit number

function createTulip(x) {
  let tulip = document.createElement("div");
  tulip.className = "tulip";
  tulip.style.left = x + "vw";

  tulip.innerHTML = `
    <div class="leaf left"></div>
    <div class="leaf right"></div>
    <div class="stem"></div>
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

/* Generate spaced tulips */
function generatePosition() {
  let pos;
  do {
    pos = Math.random() * 90;
  } while (positions.some(p => Math.abs(p - pos) < 10)); // spacing

  positions.push(pos);

  if (positions.length > maxTulips) {
    positions.shift(); // remove old ones
  }

  return pos;
}

/* CLICK EVENT */
document.addEventListener("click", (e) => {
  let pos = generatePosition();
  createTulip(pos);

  for (let i = 0; i < 5; i++) {
    createHeart(e.clientX, e.clientY);
  }
});

/* AUTO LOAD (nice starting look) */
window.onload = () => {
  for (let i = 0; i < 4; i++) {
    let pos = generatePosition();
    createTulip(pos);
  }
};
