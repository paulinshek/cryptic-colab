import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSelector } from "react-redux";

type Props = {
  match: any;
};

const ViewCrosswordScene: FunctionComponent<Props> = ({
  match,
}): JSX.Element => {
  const [crosswordId, setCrosswordId] = useState();

  useEffect(() => {
    setCrosswordId(match.params.crosswordId);
  }, [match]);

  return (
    <div className="">
      <p className="text-lg">crossword scene {crosswordId}</p>
    </div>
  );
};

export default ViewCrosswordScene;
