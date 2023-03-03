const buttons = {
    red: document.querySelector('#red'),
    green: document.querySelector('#green'),
    blue: document.querySelector('#blue')
};

const h1resp = document.querySelector('#resp');
const docBody = document.body;

function getRandomHexValue(min = 0, max = 255) {
    const decimal = Math.floor(Math.random() * (max - min + 1)) + min;
    const hex = decimal.toString(16).padStart(2, '0');
    return hex;
}

function setBodyBackgroundColor(color) {
    docBody.style.backgroundColor = color;
    h1resp.textContent = color;
}

function setRandomColor(minR, maxR, minG, maxG, minB, maxB) {
    const red = getRandomHexValue(minR, maxR);
    const green = getRandomHexValue(minG, maxG);
    const blue = getRandomHexValue(minB, maxB);
    const color = `#${red}${green}${blue}`;
    setBodyBackgroundColor(color);
}

buttons.red.addEventListener('click', () => {
    setRandomColor(224, 255, 0, 95, 0, 95);
});

buttons.green.addEventListener('click', () => {
    setRandomColor(0, 95, 224, 255, 0, 95);
});

buttons.blue.addEventListener('click', () => {
    setRandomColor(0, 95, 0, 95, 224, 255);
});
