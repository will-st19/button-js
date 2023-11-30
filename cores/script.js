const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const colorDisplay = document.querySelector('#color-display');
const docBody = document.body;
const hexChars = '0123456789ABCDEF';

function getRandomHexValue(min = 0, max = 255) {
    const decimal = Math.floor(Math.random() * (max - min + 1)) + min;
    const hex = decimal.toString(16).padStart(2, '0');
    return hex;
}

function setBodyBackgroundColor(color) {
    docBody.style.backgroundColor = color;
    colorDisplay.textContent = color;
}

redButton.addEventListener('click', () => {
    const color = `#${getRandomHexValue(224, 255)}${getRandomHexValue(0, 95)}${getRandomHexValue(0, 95)}`;
    setBodyBackgroundColor(color);
});

greenButton.addEventListener('click', () => {
    const color = `#${getRandomHexValue(0, 95)}${getRandomHexValue(224, 255)}${getRandomHexValue(0, 95)}`;
    setBodyBackgroundColor(color);
});

blueButton.addEventListener('click', () => {
    const color = `#${getRandomHexValue(0, 95)}${getRandomHexValue(0, 95)}${getRandomHexValue(224, 255)}`;
    setBodyBackgroundColor(color);
});