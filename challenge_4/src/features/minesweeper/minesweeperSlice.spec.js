import {
  Board,
  placeMines,
  fillRemainingBoard,
  getCell,
  findSurroundingCells,
  randomIndexGenerator
} from './helpers';

describe('board generator', () => {
  describe('Board', () => {
    it('should create a board based on size', () => {
      const size = 10;
      const newBoard = Board(size);
      expect(newBoard.length).toBe(size);
      expect(newBoard[0].length).toBe(size);
    });
  })

  describe('randomIndexGenerator', () => {
    let randomIndex;

    beforeEach(() => {
      randomIndex = randomIndexGenerator(1);
    });

    it('should return an array', () => {
      expect(Array.isArray(randomIndex)).toBe(true);
    });

    it('should return an index within given range', () => {
      expect(randomIndex[0]).toBe(0);
      expect(randomIndex[1]).toBe(0);

    })
  });

  describe('placeMines', () => {
    it('should place mines randomly based on input', () => {
      const board = [
        [{value:null}, {value:null}, {value:null}],
        [{value:null}, {value:null}, {value:null}],
        [{value:null}, {value:null}, {value:null}]
      ]
      const size = 3;
      const boardWithMines = placeMines(board, size);
      let mineCount = 0;
      for (let row = 0; row < boardWithMines.length;  row++) {
        for (let col = 0; col < boardWithMines.length; col++) {
          if (boardWithMines[row][col].value === 'X') {
              mineCount++;
          }
        }
      }
      expect(mineCount).toBe(size);
    })
  });

  describe('fillRemainingBoard', () => {
    it('should fill remaining board based on adjacent mines', () => {
      var testBoard = [
        [{"value":null,"visible":false},{"value":null,"visible":false},{"value":"X","visible":false}],
        [{"value":"X","visible":false},{"value":null,"visible":false},{"value":null,"visible":false}],
        [{"value":null,"visible":false},{"value":"X","visible":false},{"value":null,"visible":false}]
      ]
      var expectedBoard = [
        [{"value":1,"visible":false},{"value":2,"visible":false},{"value":"X","visible":false}],
        [{"value":"X","visible":false},{"value":3,"visible":false},{"value":2,"visible":false}],
        [{"value":2,"visible":false},{"value":"X","visible":false},{"value":1,"visible":false}]
      ]
      const finalBoard = fillRemainingBoard(testBoard);
      expect(finalBoard[0][1].value).toEqual(expectedBoard[0][1].value);
      expect(finalBoard[1][1].value).toEqual(expectedBoard[1][1].value);
    });
  });
});