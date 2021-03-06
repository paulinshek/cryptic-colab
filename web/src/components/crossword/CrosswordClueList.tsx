import React, { FunctionComponent } from "react";

import CrosswordClue from "./CrosswordClue";

import { CrosswordClue as CrosswordClueType } from "./../../store/crossword/crosswordTypes";

type Props = {
  title: string;
  clues: CrosswordClueType[];
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
