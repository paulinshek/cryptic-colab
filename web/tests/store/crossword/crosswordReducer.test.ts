import expect from "expect";

import reducer from "./../../../src/store/crossword/crosswordReducer"
import { getCrosswordSuccess } from "../../../src/store/crossword/crosswordActions";

describe("crosswordReducer", () => {
    it('should return the state when provided', () => {
        const state = {
          crosswords: [
              {Id: 0,
                Clues: [],
                Width: 3,
                Height: 4,
                Cruciverbalist: "",}
          ],
        }
        const action = {type: ""}
    
        const modifiedState = reducer(state, action)
        expect(modifiedState).toEqual(state)
      })
    
      it('should return the initial state when no state provided', () => {
        const action = {type: ""}
        expect(reducer(undefined, action)).toEqual({
          crosswords: [],
        })
      })

      describe("GET_CROSSWORD_SUCCESS", () => {
          const crossword1 = {
            Id: 1,
            Clues: [],
            Width: 3,
            Height: 4,
            Cruciverbalist: "cruciverbalist 1"
          }

          const crossword2 = {
            Id: 2,
            Clues: [],
            Width: 10,
            Height: 10,
            Cruciverbalist: "cruciverbalist 2"
          }

          it("adds the provided crossword to the state crosswords array if no crossword is already present with a matching id", () => {
            const state = {
                crosswords: [crossword1]
            }
            const action = getCrosswordSuccess(crossword2)
            const modifiedState = reducer(state, action)
            expect(modifiedState.crosswords).toEqual([crossword1, crossword2])
          })

          it("adds the provided crossword to the state crosswords array, overriding the existing crossword if a crossword is already present with a matching id", () => {
            const state = {
                crosswords: [crossword1]
            }
            const crossword2Override = {
                Id: 2,
                Clues: [],
                Width: 15,
                Height: 15,
                Cruciverbalist: "cruciverbalist 2 override"
            }

            const action = getCrosswordSuccess(crossword2Override)
            const modifiedState = reducer(state, action)
            expect(modifiedState.crosswords).toEqual([crossword1, crossword2Override])
          })
      })
})