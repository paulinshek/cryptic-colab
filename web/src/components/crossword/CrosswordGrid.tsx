import React, { FunctionComponent, useState, useEffect } from "react";

import crosswordGridService from "../../services/crosswordGridService";
import { Crossword, GridSquare } from "./../../store/crossword/crosswordTypes";
import CrosswordGridSquare from "./CrosswordGridSquare";

type Props = {
  crossword: Crossword;
};

const renderGridRow = (gridRow: GridSquare[], key: any): JSX.Element => {
  return (
    <div key={key} className="crossword-grid-row">
      {gridRow.map((gridSquare, index) => renderGridSquare(gridSquare, index))}
    </div>
  );
};

const renderGridSquare = (gridSquare: GridSquare, key: any): JSX.Element => {
  return (
    <CrosswordGridSquare
      isInput={gridSquare.isInput}
      clueNumber={gridSquare.clueNumber}
      key={key}
    />
  );
};

const CrosswordGrid: FunctionComponent<Props> = ({
  crossword,
}): JSX.Element => {
  const [grid, setGrid] = useState<GridSquare[][]>([]);

  useEffect(() => {
    setGrid(crosswordGridService.deriveGrid(crossword));
  }, [crossword, setGrid]);

  return (
    <div className="crossword-grid" style={{ maxWidth: 40 * crossword.Width }}>
      {grid.map((gridRow, index) => renderGridRow(gridRow, index))}
    </div>
  );
};

export default CrosswordGrid;
