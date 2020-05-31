import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSelector } from "react-redux";

import { Crossword } from "./../../store/crossword/crosswordTypes";

type Props = {
  crossword: Crossword;
};

const CrosswordMetadata: FunctionComponent<Props> = ({
  crossword,
}): JSX.Element => {
  console.log(crossword);

  return (
    <div className="">
      <p>Crossword {crossword.Id}</p>
      <p>Written by {crossword.Cruciverbalist}</p>
    </div>
  );
};

export default CrosswordMetadata;
