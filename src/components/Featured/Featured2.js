import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../server/images/3.png";
import img4 from "../../server/images/4.png";
import img5 from "../../server/images/5.png";

function Featured2(props) {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  function truncate(str) {
    return str.slice(0, 100) + "...";
  }
  function getDate() {
    const date = new Date();
    return date.toDateString();
  }
  function getImgName(dataID) {
    if (dataID === 3) return img3;
    else if (dataID === 4) return img4;
    else if (dataID === 5) return img5;
    else return "none";
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
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0 news-font">
            <strong>{props.data.heading}</strong>
          </h3>
          <div className="mb-1 text-muted">{getDate}</div>
          <p className="card-text mb-auto">{truncate(props.data.content)}</p>
          <p
            className="stretched-link continue-reading"
            onClick={handleClick}
            style={{ color: "blue" }}
          >
            Continue reading
          </p>
        </div>
        <div className="col-auto d-none d-lg-block">
          {props.data.image === "" ? (
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
          ) : (
            <img
              src={getImgName(props.data.id)}
              alt="Thumbnail"
              width="200"
              height="250"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Featured2;
