import React from "react";

type Props = {};

function Flag(displayed: any) {
  return (
    <div className="flag-container">
      {displayed && (
        <img src={displayed.flags.png} alt={displayed.name.common} />
      )}
    </div>
  );
}

export default Flag;
