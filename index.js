const container = document.querySelector(".container");

function makeRows(n) {
  container.style.setProperty('--grid-rows', n);
  container.style.setProperty('--grid-cols', n);
  for (c = 0; c < (n * n); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(50);

const calculateNewRgb = (color) => {

    let indexOfFirstComma = color.indexOf(',');
    let indexOfSecondComma = color.indexOf(',', color.indexOf(',') + 1);
    let indexOfCloseParens = color.indexOf(')')

    let r = parseFloat(color.slice(4, indexOfFirstComma));
    let g = parseFloat(color.slice(indexOfFirstComma + 1, indexOfSecondComma));
    let b = parseFloat(color.slice(indexOfSecondComma + 1, indexOfCloseParens));

    if (r <= 0 || g <= 0 || b <= 0) return;

    let newR = r - 25.5;
    let newG = g - 25.5;
    let newB = b - 25.5;

    let newRgb = 'rgb(' + newR + ',' + newG + ',' + newB + ')' 

    return newRgb;
}

const squares = document.querySelectorAll('.grid-item');

squares.forEach((square) => {
    square.style.backgroundColor = 'rgb(255, 255, 255)';  
})

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        let currentColor = square.style.backgroundColor;
        let newColor = calculateNewRgb(currentColor);

        square.style.backgroundColor = newColor;
    })
})

