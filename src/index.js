import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomeHeader from "./Components/HomeHeader";
import HomeMain from "./Components/HomeMain";
import HomeFooter from "./Components/HomeFooter";
import HomeFilterSecetion from "./Components/HomeFilterSecetion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HomeHeader />
    <HomeFilterSecetion/>
<HomeMain />
    <HomeFooter />
  </div>
);
