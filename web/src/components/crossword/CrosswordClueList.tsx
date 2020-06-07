import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import CrosswordClue from "./CrosswordClue";

import * as CrosswordTypes from "./../../store/crossword/crosswordTypes";

type Props = {
  title: string;
  clues: CrosswordTypes.CrosswordClue[];
};

const CrosswordClueList: FunctionComponent<Props> = ({
  title,
  clues,
}): JSX.Element => {
  return (
    <div className="">
      <p className="text-lg bold">{title}</p>
      {clues.map((clue, index) => (
        <CrosswordClue clue={clue} key={index} />
      ))}
    </div>
  );
};

export default CrosswordClueList;
