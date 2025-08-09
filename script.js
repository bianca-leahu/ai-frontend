function generateRandomHexColor() {
  // Ensure 6-digit hex by padding with leading zeros
  const colorNumber = Math.floor(Math.random() * 0xffffff);
  return `#${colorNumber.toString(16).padStart(6, '0')}`;
}

function handleChangeBackground() {
  const newColor = generateRandomHexColor();
  document.body.style.backgroundColor = newColor;
}

function initializeUI() {
  const button = document.getElementById('colorButton');
  if (!button) return;
  button.addEventListener('click', handleChangeBackground);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeUI);
} else {
  initializeUI();
}
