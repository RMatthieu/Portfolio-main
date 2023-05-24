// JavaScript
const rainbowText = document.querySelector('#Rainbow-text');
let hue = 0;
let speed = 0.5;

function animateRainbowText() {
  hue += speed;
  rainbowText.style.backgroundImage = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue + 60}, 100%, 50%), hsl(${hue + 120}, 100%, 50%), hsl(${hue + 180}, 100%, 50%), hsl(${hue + 240}, 100%, 50%), hsl(${hue + 300}, 100%, 50%), hsl(${hue + 360}, 100%, 50%))`;
  //rainbowText.style.backgroundImage = 'black';

  requestAnimationFrame(animateRainbowText);
}

animateRainbowText();


