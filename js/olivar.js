const numColors = 6;
let targetColor;

const colorHints = [
  "Nature-inspired",
  "Ocean vibes",
  "Sunset warmth",
  "Floral beauty",
  "Mystical twilight",
  "Morning freshness"
];

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `RGB(${red}, ${green}, ${blue})`;
}

function generateColorOptions() {
  const colorBox = document.getElementById('color-box');
  colorBox.innerHTML = '';

  for (let i = 0; i < numColors; i++) {
    const colorOption = document.createElement('div');
    colorOption.className = 'color-option';
    const bgColor = generateRandomColor();
    colorOption.style.backgroundColor = bgColor;
    colorOption.addEventListener('click', () => checkAnswer(bgColor));
    colorBox.appendChild(colorOption);
  }
}

function pickTargetColor() {
  const randomIndex = Math.floor(Math.random() * numColors);
  targetColor = generateRandomColor(); // Use the RGB value directly
  const hint = colorHints[randomIndex];
  document.getElementById('color-display').textContent = targetColor;
  document.getElementById('hint-text').textContent = hint;
}

function checkAnswer(bgColor) {
  if (bgColor === targetColor) {
    document.getElementById('feedback').textContent = 'Correct! Well done!';
  } else {
    document.getElementById('feedback').textContent = 'Wrong! Try again.';
  }

  setTimeout(() => {
    document.getElementById('feedback').textContent = '';
    document.getElementById('hint-text').textContent = '';
    generateColorOptions();
    pickTargetColor();
  }, 1500);
}

generateColorOptions();
pickTargetColor();
