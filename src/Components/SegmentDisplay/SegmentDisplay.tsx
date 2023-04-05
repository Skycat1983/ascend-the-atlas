import React from "react";
import styles from "./SevenSegmentDisplay.module.css";

interface SevenSegmentDisplayProps {
  number: number;
}

const segments = [
  [
    styles.horizontal,
    styles.horizontal,
    styles.vertical,
    styles.vertical,
    styles.horizontal,
  ],
  [styles.vertical, styles.vertical],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
  [styles.vertical, styles.vertical, styles.horizontal, styles.vertical],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
  [styles.horizontal, styles.vertical, styles.vertical],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
  [
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
    styles.vertical,
    styles.horizontal,
  ],
];

const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({
  number,
}) => {
  const activeSegments = segments[number];

  return (
    <div style={{ position: "relative", width: "70px", height: "110px" }}>
      <div
        className={`${styles.segment} ${styles.horizontal}`}
        style={{ top: 0, left: 10 }}
      />
      <div
        className={`${styles.segment} ${styles.horizontal}`}
        style={{ top: 50, left: 10 }}
      />
      <div
        className={`${styles.segment} ${styles.horizontal}`}
        style={{ bottom: 0, left: 10 }}
      />
      <div
        className={`${styles.segment} ${styles.vertical}`}
        style={{ top: 10, left: 0 }}
      />
      <div
        className={`${styles.segment} ${styles.vertical}`}
        style={{ top: 10, right: 0 }}
      />
      <div
        className={`${styles.segment} ${styles.vertical}`}
        style={{ bottom: 10, left: 0 }}
      />
      <div
        className={`${styles.segment} ${styles.vertical}`}
        style={{ bottom: 10, right: 0 }}
      />
      {activeSegments.map((segmentClass, index) => (
        <div
          key={index}
          className={`${styles.segment} ${styles.on} ${segmentClass}`}
        />
      ))}
    </div>
  );
};

export default SevenSegmentDisplay;
