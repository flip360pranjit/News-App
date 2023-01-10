import React from "react";
import Content from "./Content";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";

function Home(props) {
  return (
    <div>
      <Header />
      <main className="container content">
        <Featured changeCurrentIndex={props.changeCurrentIndex} />
        <Content changeCurrentIndex={props.changeCurrentIndex} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
