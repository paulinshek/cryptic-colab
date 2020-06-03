import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { Crossword } from "./../../store/crossword/crosswordTypes";

type Props = {
  isInput: boolean;
  clueNumber: number | null;
};

const CrosswordGridSquare: FunctionComponent<Props> = ({
  isInput,
  clueNumber,
}): JSX.Element => {
  return (
    <div className="crossword-grid-square">
      {clueNumber === null || (
        <span className="crossword-clue-number">{clueNumber}</span>
      )}
      <div
        className={`crossword-grid-square-background ${
          isInput ? "bg-white" : "bg-black"
        }`}
      ></div>
    </div>
  );
};

export default CrosswordGridSquare;
