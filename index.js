const container = document.querySelector(".container");
const button = document.querySelector('button');
let squares;

const setBackgroundToWhite = () => {
  squares.forEach((square) => {
    square.style.backgroundColor = 'rgb(255, 255, 255)';  
  })
}

const handleHover = () => {
  squares.forEach((square) => {
      square.addEventListener('mouseenter', () => {
          let currentColor = square.style.backgroundColor;
          let newColor = calculateNewRgb(currentColor);
  
          square.style.backgroundColor = newColor;
      })
  })
}

const calculateNewRgb = (color) => {
  let indexOfFirstComma = color.indexOf(',');
  let indexOfSecondComma = color.indexOf(',', color.indexOf(',') + 1);
  let indexOfCloseParens = color.indexOf(')');
  let r = parseFloat(color.slice(4, indexOfFirstComma));
  let g = parseFloat(color.slice(indexOfFirstComma + 1, indexOfSecondComma));
  let b = parseFloat(color.slice(indexOfSecondComma + 1, indexOfCloseParens));

  if (r <= 5 || g <= 5 || b <= 5) return;
  let newR = r - 25;
  let newG = g - 25;
  let newB = b - 25;

  let newRgb = 'rgb(' + newR + ',' + newG + ',' + newB + ')';
  return newRgb;
}

const deletePreviousGrid = (parent) => {
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
}

const customizeGrid = () => {
  let userVal = prompt('Please enter the desired number of rows (1-100)');
  deletePreviousGrid(container);
  makeGrid(parseInt(userVal));
}

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
