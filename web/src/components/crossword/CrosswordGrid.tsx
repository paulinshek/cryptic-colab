import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import crosswordGridUtilities from "./../../utilities/crosswordGridUtilities";
import { Crossword, GridSquare } from "./../../store/crossword/crosswordTypes";
import CrosswordGridSquare from "./CrosswordGridSquare";

type Props = {
  crossword: Crossword;
};

const CrosswordGrid: FunctionComponent<Props> = ({
  crossword,
}): JSX.Element => {
  const [grid, setGrid] = useState<GridSquare[][]>([]);

  useEffect(() => {
    setGrid(crosswordGridUtilities.deriveGrid(crossword));
  }, [crossword, setGrid]);

  return (
    <div className="">
      {grid.map((gridRow, index) => {
        return (
          <div key={index}>
            {gridRow.map((gridSquare) => {
              return (
                <CrosswordGridSquare
                  isInput={gridSquare.isInput}
                  clueNumber={gridSquare.clueNumber}
                  dimension={20}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CrosswordGrid;
