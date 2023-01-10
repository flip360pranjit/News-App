import React from "react";
import img3 from "../../server/images/3.png";
import img4 from "../../server/images/4.png";
import img5 from "../../server/images/5.png";

function NewsContent(props) {
  const sentences = props.data.content.split("\n");

  function getImgName(dataID) {
    if (dataID === 3) return img3;
    else if (dataID === 4) return img4;
    else return img5;
  }

  return (
    <div className="col-md-8">
      <div className="news-content-container">
        <h1 className="news-font">
          <strong>{props.data.heading}</strong>
        </h1>
        <h6>DUMMY NEWS</h6>
        <p>Updated on {props.data.date + " " + props.data.time}</p>
        {props.data.image && (
          <img src={getImgName(props.data.id)} alt="Source" />
        )}
        {sentences.map((sentence, index) =>
          sentence.length < 100 ? (
            <p className="news-content" key={index}>
              <strong>{sentence}</strong>
            </p>
          ) : (
            <p className="news-content" key={index}>
              {sentence}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default NewsContent;
