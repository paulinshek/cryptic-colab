import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { find, propEq } from "ramda";

import { RootState } from "../../store/rootTypes";
import { requestGetCrossword } from "./../../store/crossword/crosswordActions";
import CrosswordMetaData from "./CrosswordMetadata";

import { Crossword as CrosswordType } from "./../../store/crossword/crosswordTypes";

type Props = {
  crosswordId: number;
};

const Crossword: FunctionComponent<Props> = ({ crosswordId }): JSX.Element => {
  const dispatch = useDispatch();

  const crossword: CrosswordType | undefined = useSelector(
    (state: RootState) => {
      return find<CrosswordType>(propEq("Id", crosswordId))(
        state.crossword.crosswords
      );
    }
  );

  useEffect(() => {
    dispatch(requestGetCrossword(crosswordId));
  }, [crosswordId, dispatch]);

  return (
    <div className="">
      {crossword ? (
        <div>
          <CrosswordMetaData crossword={crossword} />
        </div>
      ) : (
        <p>no crossword yet</p>
      )}
    </div>
  );
};

export default Crossword;
