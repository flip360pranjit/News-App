import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TrendingNewsBlock(props) {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    props.changeCurrentIndex(props.currentData.id);
  }
  useEffect(() => {
    if (clicked) {
      navigate("/news");
    }
  }, [clicked, navigate, props]);

  return (
    <div className="trending-news" key={props.currentData.id}>
      <h5>NEWS {props.currentData.id}</h5>
      <h6 className="news-font" onClick={handleClick}>
        <strong>{props.currentData.heading}</strong>
      </h6>
      <p>Published on {props.currentData.date}</p>
      <p>{props.currentData.time}</p>
      <hr />
    </div>
  );
}

export default TrendingNewsBlock;
