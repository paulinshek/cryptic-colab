import expect from "expect";

import {
  Crossword,
  CrosswordActionTypes,
} from "./../../../src/store/crossword/crosswordTypes";
import {requestGetCrossword, getCrosswordSuccess, getCrosswordFailure} from "./../../../src/store/crossword/crosswordActions"



describe("crosswordActions", () => {
    describe("requestGetCrossword", () => {
        it("returns an action of type REQUEST_GET_CROSSWORD with a payload containing the provided crossword id", () => {
            const crosswordId = 66
            const action = requestGetCrossword(66)

            expect(action).toEqual({
                type: CrosswordActionTypes.REQUEST_GET_CROSSWORD,
                payload: {
                    crosswordId: crosswordId
                }
            })
        })
    })

    describe("getCrosswordSuccess", () => {
        it("returns an action of type GET_CROSSWORD_SUCCESS with a payload containing the provided crossword", () => {
            const crossword: Crossword = {
                Id: 0,
                Clues: [],
                Width: 3,
                Height: 4,
                Cruciverbalist: "",
              }
            const action = getCrosswordSuccess(crossword)

            expect(action).toEqual({
                type: CrosswordActionTypes.GET_CROSSWORD_SUCCESS,
                payload: {
                    crossword: crossword
                }
            })
        })
    })

    describe("getCrosswordFailure", () => {
        it("returns an action of type GET_CROSSWORD_FAILURE with the provided error", () => {
            const error = new Error("error message")
            const action = getCrosswordFailure(error)

            expect(action).toEqual({
                type: CrosswordActionTypes.GET_CROSSWORD_FAILURE,
                error: error,
                payload: null,
                meta: null
            })
        })
    })
})