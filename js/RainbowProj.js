// JavaScript
const rainbowText = document.querySelector('#rainbow-text');
let hue = 0;
let speed = 0.3;

function animateRainbowText() {
  hue += speed;
  rainbowText.style.color = `hsl(${hue}, 100%, 50%)`;

  requestAnimationFrame(animateRainbowText);
}

animateRainbowText();


