const Board = (size) => {
  const board = [...new Array(size)].map(() => [...new Array(size)].fill().map(() => {return {value: null, visible: false}}));
  const boardWithMines = placeMines(board, size);
  const finalBoard = fillRemainingBoard(boardWithMines);
  return finalBoard;
};

const placeMines = (board, mines) => {
  const boardCopy = board.slice();
  while (mines > 0) {
      const [row, column] = randomIndexGenerator(board.length);
      if (boardCopy[row][column].value !== 'X') {
          boardCopy[row][column].value = 'X';
          mines--;
      }
  }
  return boardCopy;
};

const fillRemainingBoard = (board) => {
    const boardCopy = board.slice();
    for (let row = 0; row < boardCopy.length; row++) {
        for (let col = 0; col < boardCopy.length; col++) {
            const currentPosition = boardCopy[row][col];
            if (currentPosition.value === 'X') {
                continue;
            }
            const surroundingCells = findSurroundingCells(board, row, col);
            const numOfAdjacentMines = Object.values(surroundingCells).reduce((accum, curr) => {
              if (curr !== null && curr.value === 'X') {
                accum++;
              }
              return accum;
            }, 0);
            currentPosition.value = numOfAdjacentMines;
        }
    }
    return boardCopy;
}

const getCell = (board, y, x) => {
  const NO_VALUE = null;
  let value, hasValue;

  try {
    hasValue = board[y][x] !== undefined;
    value    = hasValue ?  board[y][x] : NO_VALUE;
  } catch(e) {
    value    = NO_VALUE;
  }

  return value;
};

function findSurroundingCells(board, y, x) {
  // Directions are clockwise
  return {
    up:        getCell(board, y-1, x),
    upRight:   getCell(board, y-1, x+1),
    right:     getCell(board, y,   x+1),
    downRight: getCell(board, y+1, x+1),
    down:      getCell(board, y+1, x),
    downLeft:  getCell(board, y+1, x-1),
    left:      getCell(board, y,   x-1),
    upLeft:    getCell(board, y-1, x-1)
  }
}

const randomIndexGenerator = (boardSize) => {
  const randomRow = Math.floor(Math.random() * boardSize);
  const randomColumn = Math.floor(Math.random() * boardSize);
  return [randomRow, randomColumn];
};

export {
  Board,
  placeMines,
  fillRemainingBoard,
  getCell,
  findSurroundingCells,
  randomIndexGenerator
}
