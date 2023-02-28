const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const h1resp = document.querySelector('#resp');
const docBody = document.body
const maxs = '89ABCDEF'
const mins = '01234567'

redButton.addEventListener('click', () => {
    let tot = ''
    let resultMax = ''
    let resultMin = ''

    while (resultMax.length < 2) {
        resultMax = resultMax + maxs[Math.floor(Math.random() * maxs.length)]
    }
    while (resultMin.length < 4) {
        resultMin = resultMin + mins[Math.floor(Math.random() * mins.length)]
    }

    tot = '#' + resultMax + resultMin
    docBody.style.backgroundColor = tot
    h1resp.innerHTML = tot
})

greenButton.addEventListener('click', () => {
    let tot = ''
    let resultMax = ''
    let resultMin = ''

    while (resultMax.length < 2) {
        resultMax = resultMax + maxs[Math.floor(Math.random() * maxs.length)]
    }
    while (resultMin.length < 4) {
        resultMin = resultMin + mins[Math.floor(Math.random() * mins.length)]
    }

    tot = '#' + resultMin.substring(0, 2) + resultMax + resultMin.substring(2)
    docBody.style.backgroundColor = tot
    h1resp.innerHTML = tot
})

blueButton.addEventListener('click', () => {
    let tot = ''
    let resultMax = ''
    let resultMin = ''

    while (resultMax.length < 2) {
        resultMax = resultMax + maxs[Math.floor(Math.random() * maxs.length)]
    }
    while (resultMin.length < 4) {
        resultMin = resultMin + mins[Math.floor(Math.random() * mins.length)]
    }

    tot = '#' + resultMin.substring(0, 2) + resultMin.substring(2) + resultMax
    docBody.style.backgroundColor = tot
    h1resp.innerHTML = tot
})