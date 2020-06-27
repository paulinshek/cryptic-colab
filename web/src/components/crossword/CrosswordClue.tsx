import React, { FunctionComponent } from "react";

import * as CrosswordTypes from "./../../store/crossword/crosswordTypes";

type Props = {
  clue: CrosswordTypes.CrosswordClue;
};

const CrosswordClue: FunctionComponent<Props> = ({ clue }): JSX.Element => {
  return (
    <div className="flex">
      <span className="flex-initial mr-2">{clue.ClueNumber}.</span>
      <span className="flex-1">
        {clue.ClueText}{" "}
        <span className="text-gray-700">({clue.Signature})</span>
      </span>
    </div>
  );
};

export default CrosswordClue;
