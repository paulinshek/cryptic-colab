import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { Crossword } from "./../../store/crossword/crosswordTypes";

type Props = {
  dimension: number;
  isInput: boolean;
  clueNumber: number | null;
};

const CrosswordGridSquare: FunctionComponent<Props> = ({
  dimension,
  isInput,
  clueNumber,
}): JSX.Element => {
  return <div className="">S</div>;
};

export default CrosswordGridSquare;
