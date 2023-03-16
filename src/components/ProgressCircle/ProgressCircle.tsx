import React from "react";

import classes from "./ProgressCircle.module.css";

export default function ProgressCircle(props: { percentage: string }) {
  const percentage = props.percentage;

  const percentageClass = `p${percentage}`;
  return (
    <>
      <div
        className={`${classes["c100"]} ${classes[percentageClass]} ${classes["center"]}`}
      >
        <span>{percentage}%</span>
        <div className={`${classes["slice"]}`}>
          <div className={`${classes["bar"]}`}></div>
          <div className={`${classes["fill"]}`}></div>
        </div>
      </div>
    </>
  );
}
