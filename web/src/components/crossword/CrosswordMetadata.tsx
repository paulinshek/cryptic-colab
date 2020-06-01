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
  return (
    <div className="">
      <p className="font-serif text-2xl font-bold">Crossword {crossword.Id}</p>
      <p className="text-xl">
        Written by <span className="font-bold">{crossword.Cruciverbalist}</span>
      </p>
    </div>
  );
};

export default CrosswordMetadata;
