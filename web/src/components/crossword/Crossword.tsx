import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { find, propEq, filter } from "ramda";

import { RootState } from "../../store/rootTypes";
import { requestGetCrossword } from "./../../store/crossword/crosswordActions";
import CrosswordMetaData from "./CrosswordMetadata";
import CrosswordGrid from "./CrosswordGrid";
import CrosswordClueList from "./CrosswordClueList";

import {
  Crossword as CrosswordType,
  CrosswordClue,
  ClueDirection,
} from "./../../store/crossword/crosswordTypes";

type Props = {
  crosswordId: number;
};

const renderClueList = (
  clueDirection: ClueDirection,
  clues: CrosswordClue[]
): JSX.Element | null => {
  const filteredClues = filter(
    (clue) => clue.Direction === clueDirection,
    clues
  );

  if (filteredClues.length > 0) {
    const title = clueDirection === ClueDirection.ACROSS ? "Across" : "Down";
    return <CrosswordClueList clues={filteredClues} title={title} />;
  } else {
    return null;
  }
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
    <div className="p-4">
      {crossword ? (
        <div>
          <div className="mb-4">
            <CrosswordMetaData crossword={crossword} />
          </div>
          <div className="crossword-body-container">
            <CrosswordGrid crossword={crossword} />
            {renderClueList(ClueDirection.ACROSS, crossword.Clues)}
            {renderClueList(ClueDirection.DOWN, crossword.Clues)}
          </div>
        </div>
      ) : (
        <p>no crossword yet</p>
      )}
    </div>
  );
};

export default Crossword;
