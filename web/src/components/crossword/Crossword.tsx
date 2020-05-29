import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestGetCrossword } from "./../../store/crossword/crosswordActions";
import CrosswordMetaData from "./CrosswordMetadata";

type Props = {
  crosswordId: string;
};

const Crossword: FunctionComponent<Props> = ({ crosswordId }): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestGetCrossword(crosswordId));
  }, []);

  return (
    <div className="">
      <CrosswordMetaData />
    </div>
  );
};

export default Crossword;
