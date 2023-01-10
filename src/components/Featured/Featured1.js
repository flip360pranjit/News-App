import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured1(props) {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  function truncate(str) {
    return str.slice(0, 300) + "...";
  }

  function handleClick() {
    setClicked(true);
  }
  useEffect(() => {
    if (clicked) {
      props.changeCurrentIndex(props.data.id);
      navigate("/news");
    }
  }, [clicked, navigate, props]);

  return (
    <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 news-font">{props.data.heading}</h1>
        <p className="lead my-3">{truncate(props.data.content)}</p>
        <p className="lead mb-0">
          <span
            className="text-white fw-bold continue-reading"
            onClick={handleClick}
          >
            Continue reading...
          </span>
        </p>
      </div>
    </div>
  );
}

export default Featured1;
