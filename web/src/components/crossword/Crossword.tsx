import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import { requestGetCrossword } from "./../../store/crossword/crosswordActions";
import CrosswordMetaData from "./CrosswordMetadata";

type Props = {
  crosswordId: string;
};

const Crossword: FunctionComponent<Props> = ({ crosswordId }): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatching");
    dispatch(requestGetCrossword(crosswordId));
  }, []);

  return (
    <div className="">
      <CrosswordMetaData />
    </div>
  );
};

export default Crossword;
