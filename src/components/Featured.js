import React from "react";
import Featured1 from "./Featured/Featured1";
import Featured2 from "./Featured/Featured2";
import data from "../server/data";

function Featured(props) {
  const array = Array.from({ length: 3 }, () => Math.floor(Math.random() * 5));

  return (
    <div>
      <Featured1
        data={data[array[0]]}
        changeCurrentIndex={props.changeCurrentIndex}
      />

      <div className="row mb-2">
        <Featured2
          data={data[array[1]]}
          changeCurrentIndex={props.changeCurrentIndex}
        />
        <Featured2
          data={data[array[2]]}
          changeCurrentIndex={props.changeCurrentIndex}
        />
      </div>
    </div>
  );
}

export default Featured;
