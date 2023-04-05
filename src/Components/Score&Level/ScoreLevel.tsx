import React from "react";
import SevenSegmentDisplay from "../SegmentDisplay/SegmentDisplay";

type Props = {
  score: number;
  level: number;
};

const ScoreLevel = (props: Props) => {
  const { score, level } = props;
  return (
    <div>
      {/* <SevenSegmentDisplay number={level} /> */}
      Level: {level} Score: {score}
    </div>
  );
};

export default ScoreLevel;
