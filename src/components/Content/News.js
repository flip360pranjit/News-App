import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NewsContent from "./NewsContent";
import TrendingNews from "./TrendingNews";

function News(props) {
  useEffect(() => {
    if (props) window.scrollTo(0, 0);
  }, [props]);

  return (
    <div>
      <Header />
      <div className="container news-container">
        <div className="row g-5 grey">
          <NewsContent data={props.data} />
          <TrendingNews changeCurrentIndex={props.changeCurrentIndex} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
