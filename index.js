const container = document.querySelector(".container");
const button = document.querySelector('button');
let squares;

const setBackgroundToWhite = () => {
  squares.forEach((square) => {
    square.style.backgroundColor = 'rgb(255, 255, 255)';  
  })
};

const handleHover = () => {
  squares.forEach((square) => {
      square.addEventListener('mouseenter', () => {
          let currentColor = square.style.backgroundColor;
          let newColor = calculateNewRgb(currentColor);
  
          square.style.backgroundColor = newColor;
      })
  });
};

const calculateNewRgb = (color) => {

  let indexOfFirstComma = color.indexOf(',');
  let indexOfSecondComma = color.indexOf(',', color.indexOf(',') + 1);
  let indexOfCloseParens = color.indexOf(')');

  let r = parseFloat(color.slice(4, indexOfFirstComma));
  let g = parseFloat(color.slice(indexOfFirstComma + 1, indexOfSecondComma));
  let b = parseFloat(color.slice(indexOfSecondComma + 1, indexOfCloseParens));

  if (r <= 0 || g <= 0 || b <= 0) return;

  let newR = r - 25.5;
  let newG = g - 25.5;
  let newB = b - 25.5;

  let newRgb = 'rgb(' + newR + ',' + newG + ',' + newB + ')' ;

  return newRgb;
};

const customizeGrid = () => {
  let userVal = prompt('Please enter the desired number of rows (1-100)');
  makeGrid(parseInt(userVal));
};

const makeGrid = (n) => {
  container.style.setProperty('--grid-rows', n);
  container.style.setProperty('--grid-cols', n);
  for (c = 0; c < (n * n); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "square";
  }
  squares = document.querySelectorAll('.square');

  setBackgroundToWhite();
  handleHover();
};

makeGrid(16);

button.addEventListener('click', customizeGrid);
