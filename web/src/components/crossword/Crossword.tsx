import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { find, propEq, filter } from "ramda";

import { RootState } from "../../store/rootTypes";
import { requestGetCrossword } from "./../../store/crossword/crosswordActions";
import CrosswordMetaData from "./CrosswordMetadata";
import CrosswordGrid from "./CrosswordGrid";
import CrosswordClueList from "./CrosswordClueList";
import * as CrosswordTypes from "./../../store/crossword/crosswordTypes";

type Props = {
  crosswordId: number;
};

const renderClueList = (
  clueDirection: CrosswordTypes.ClueDirection,
  clues: CrosswordTypes.CrosswordClue[]
): JSX.Element | null => {
  const filteredClues = filter(
    (clue) => clue.Direction === clueDirection,
    clues
  );

  if (filteredClues.length > 0) {
    const title = clueDirection === CrosswordTypes.ClueDirection.ACROSS ? "Across" : "Down";
    return <CrosswordClueList clues={filteredClues} title={title} />;
  } else {
    return null;
  }
};

const Crossword: FunctionComponent<Props> = ({ crosswordId }): JSX.Element => {
  const dispatch = useDispatch();

  const crossword: CrosswordTypes.Crossword| undefined = useSelector(
    (state: RootState) => {
      return find<CrosswordTypes.Crossword>(propEq("Id", crosswordId))(
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
            {renderClueList(CrosswordTypes.ClueDirection.ACROSS, crossword.Clues)}
            {renderClueList(CrosswordTypes.ClueDirection.DOWN, crossword.Clues)}
          </div>
        </div>
      ) : (
        <p>no crossword yet</p>
      )}
    </div>
  );
};

export default Crossword;
