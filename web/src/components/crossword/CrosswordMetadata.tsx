import React, {
  FunctionComponent,
} from "react";

import { Crossword } from "./../../store/crossword/crosswordTypes";

type Props = {
  crossword: Crossword;
};

const CrosswordMetadata: FunctionComponent<Props> = ({
  crossword,
}): JSX.Element => {
  return (
    <div className="">
      <p className="text-2xl font-bold">Crossword {crossword.Id}</p>
      <p className="text-l">
        Written by <span className="font-bold">{crossword.Cruciverbalist}</span>
      </p>
    </div>
  );
};

export default CrosswordMetadata;
