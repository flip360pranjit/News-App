import React from "react";
import data from "../../server/data";
import TrendingNewsBlock from "./TrendingNewsBlock";

function TrendingNews(props) {
  return (
    <div className="col-md-4">
      <div className="trending-container">
        <div className="trending-heading">
          <hr />
          <h3>Trending</h3>
          <hr />
        </div>
        {data.map((currentData) => (
          <TrendingNewsBlock
            key={currentData.id}
            currentData={currentData}
            changeCurrentIndex={props.changeCurrentIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
