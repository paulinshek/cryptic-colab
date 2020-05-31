import React, { FunctionComponent, useEffect, useState } from "react";

import Crossword from "./../components/crossword/Crossword";

type Props = {
  match: any;
};

const ViewCrosswordScene: FunctionComponent<Props> = ({
  match,
}): JSX.Element => {
  const [crosswordId, setCrosswordId] = useState<number | null>(null);

  useEffect(() => {
    const parsedCrosswordId = parseInt(match.params.crosswordId);
    setCrosswordId(isNaN(parsedCrosswordId) ? null : parsedCrosswordId);
  }, [match]);

  return (
    <div className="">
      {crosswordId ? (
        <div>
          <p className="text-lg">crossword scene {crosswordId}</p>
          <Crossword crosswordId={crosswordId} />
        </div>
      ) : (
        <p>none available</p>
      )}
    </div>
  );
};

export default ViewCrosswordScene;
