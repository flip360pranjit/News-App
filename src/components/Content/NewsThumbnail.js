import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../server/images/3.png";
import img4 from "../../server/images/4.png";
import img5 from "../../server/images/5.png";

function NewsThumbnail(props) {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  function getImgName(dataID) {
    if (dataID === 3) return img3;
    else if (dataID === 4) return img4;
    else return img5;
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
    <div className="col">
      <div className="card shadow-sm">
        {props.data.image === "" ? (
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
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
            className="bd-placeholder-img card-img-top"
            src={getImgName(props.data.id)}
            alt="Thumbnail"
          />
        )}

        <div className="card-body">
          <h5 className="mb-0 news-font">
            <strong>{props.data.heading}</strong>
          </h5>
          <br />
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleClick}
              >
                Continue Reading
              </button>
            </div>
            <small className="text-muted">9 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsThumbnail;
