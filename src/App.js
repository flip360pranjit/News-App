import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/Content/News";
import Home from "./components/Home";
import data from "./server/data";

function App() {
  const [currentDataIndex, setCurrentDataIndex] = useState(null);

  function changeCurrentIndex(id) {
    setCurrentDataIndex(id - 1);
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home changeCurrentIndex={changeCurrentIndex} />}
        />
        <Route
          exact
          path="/news"
          element={
            <News
              data={data[currentDataIndex]}
              changeCurrentIndex={changeCurrentIndex}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
