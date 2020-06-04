import crosswordGridService from "./../../src/services/crosswordGridService";
import {
  CrosswordClue,
  ClueDirection,
  Coordinate,
  Crossword,
} from "./../../src/store/crossword/crosswordTypes";
import expect from "expect";

describe("crosswordGridService", () => {

  const clues: CrosswordClue[] = [
    {
      ClueText: "The answer is CAT",
      StartCoordinate: { X: 1, Y: 1 },
      Direction: ClueDirection.ACROSS,
      Id: 0,
      ClueNumber: 1,
      Length: 3,
      Signature: "3",
    },
    {
      ClueText: "The answer is CAR",
      StartCoordinate: { X: 1, Y: 1 },
      Direction: ClueDirection.DOWN,
      Id: 1,
      ClueNumber: 1,
      Length: 3,
      Signature: "3",
    },
  ];

  describe("getIsInputAtCoordinate", () => {
    it("returns true if coordinate is the start coordinate of a provided clue", () => {
      const coordinate: Coordinate = { X: 1, Y: 1 };
      expect(
        crosswordGridService.getIsInputAtCoordinate(clues, coordinate)
      ).toEqual(true);
    });
    it("returns true if coordinate is within the boundary of an across clue", () => {
      const coordinate: Coordinate = { X: 3, Y: 1 };
      expect(
        crosswordGridService.getIsInputAtCoordinate(clues, coordinate)
      ).toEqual(true);
    });
    it("returns true if coordinate is within the boundary of a down clue", () => {
      const coordinate: Coordinate = { X: 1, Y: 3 };
      expect(
        crosswordGridService.getIsInputAtCoordinate(clues, coordinate)
      ).toEqual(true);
    });
    it("returns false if coordinate is not within the boundary of any clue", () => {
      const coordinate: Coordinate = { X: 3, Y: 3 };
      expect(
        crosswordGridService.getIsInputAtCoordinate(clues, coordinate)
      ).toEqual(false);
    });
  });

  describe("getClueNumberAtCoordinate", () => {
    

    it("returns clue number if coordinate is the start coordinate of a provided clue", () => {
      const coordinate: Coordinate = { X: 1, Y: 1 };
      expect(
        crosswordGridService.getClueNumberAtCoordinate(clues, coordinate)
      ).toEqual(1);
    });
    it("returns null if coordinate is within the boundaries of a provided clue but is not the start coordinate", () => {
      const coordinate: Coordinate = { X: 3, Y: 1 };
      expect(
        crosswordGridService.getClueNumberAtCoordinate(clues, coordinate)
      ).toEqual(null);
    });
    it("returns null if coordinate is not within the boundary of any clue", () => {
      const coordinate: Coordinate = { X: 3, Y: 3 };
      expect(
        crosswordGridService.getClueNumberAtCoordinate(clues, coordinate)
      ).toEqual(null);
    });
  });

  describe("deriveGrid", () => {
    const crossword: Crossword = {
      Id: 0,
      Clues: clues,
      Width: 3,
      Height: 4,
      Cruciverbalist: "",
    }

    const grid = crosswordGridService.deriveGrid(crossword)

    it("returns a grid of an appropriate size given the width and height of the provided crossword", () => {
      expect(grid.length).toEqual(crossword.Height);
      expect(grid[0].length).toEqual(crossword.Width)
    })

    it("returns a grid containing the appropriate grid square definitions given the provided crossword", () => {
      expect(grid[0][0]).toEqual({
        coordinate: {X:1, Y:1},
        isInput: true,
        clueNumber: 1,
        char: null
      })
      expect(grid[0][2]).toEqual({
        coordinate: {X:3, Y:1},
        isInput: true,
        clueNumber: null,
        char: null
      })
      expect(grid[3][0]).toEqual({
        coordinate: {X:1, Y:4},
        isInput: false,
        clueNumber: null,
        char: null
      })
    })
  })
});
