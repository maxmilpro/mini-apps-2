import {
  Board,
  placeMines,
  fillRemainingBoard,
  getCell,
  findSurroundingCells,
  randomIndexGenerator,
  revealSquare
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

  describe('revealSquare', () => {
    let testBoard;

    beforeEach(() => {
      testBoard = [
        [{"value":1,"visible":false, y:0,x:0},{"value":1,"visible":false,y:0,x:1},{"value":0,"visible":false,y:0,x:2}],
        [{"value":"X","visible":false,y:1,x:0},{"value":1,"visible":false,y:1,x:1},{"value":0,"visible":false,y:1,x:2}],
        [{"value":1,"visible":false,y:2,x:0},{"value":1,"visible":false,y:2,x:1},{"value":0,"visible":false,y:2,x:2}]
      ];
    });

    it('should reveal only one square if adjacent squares have mines', () => {
      const expected = [
        [{"value":1,"visible":true, y:0,x:0},{"value":1,"visible":false,y:0,x:1},{"value":0,"visible":false,y:0,x:2}],
        [{"value":"X","visible":false,y:1,x:0},{"value":1,"visible":false,y:1,x:1},{"value":0,"visible":false,y:1,x:2}],
        [{"value":1,"visible":false,y:2,x:0},{"value":1,"visible":false,y:2,x:1},{"value":0,"visible":false,y:2,x:2}]
      ];

      expect(testBoard[0][0].visible).not.toEqual(expected[0][0].visible);
      expect(testBoard[0][1].visible).toEqual(expected[0][1].visible);

      const result = revealSquare(testBoard, 0, 0);

      expect(result[0][0].visible).toEqual(expected[0][0].visible);
      expect(result[0][1].visible).toEqual(expected[0][1].visible);
      expect(result).toEqual(expected);
    });

    it('should reveal multiple squares if adjacent squares do not have mines', () => {
      const expected = [
        [{"value":1,"visible":false, y:0,x:0},{"value":1,"visible":true,y:0,x:1},{"value":0,"visible":true,y:0,x:2}],
        [{"value":"X","visible":false,y:1,x:0},{"value":1,"visible":true,y:1,x:1},{"value":0,"visible":true,y:1,x:2}],
        [{"value":1,"visible":false,y:2,x:0},{"value":1,"visible":true,y:2,x:1},{"value":0,"visible":true,y:2,x:2}]
      ]

      expect(testBoard[0][2].visible).not.toEqual(expected[0][2].visible);
      expect(testBoard[1][1].visible).not.toEqual(expected[1][1].visible);

      const result = revealSquare(testBoard, 0, 2);

      expect(result[0][2].visible).toEqual(expected[0][2].visible);
      expect(result[1][1].visible).toEqual(expected[1][1].visible);
      expect(result).toEqual(expected);
    });
  });
});