import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSelector } from "react-redux";

import Crossword from "./../components/crossword/Crossword";

type Props = {
  match: any;
};

const ViewCrosswordScene: FunctionComponent<Props> = ({
  match,
}): JSX.Element => {
  const [crosswordId, setCrosswordId] = useState<string | null>(null);

  useEffect(() => {
    setCrosswordId(match.params.crosswordId);
  }, [match]);

  return (
    <div className="">
      <p className="text-lg">crossword scene {crosswordId}</p>
      {crosswordId ? (
        <Crossword crosswordId={crosswordId} />
      ) : (
        <p>none available</p>
      )}
    </div>
  );
};

export default ViewCrosswordScene;
