import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore/ExploreScreen";

const Tuiter = () => {
  return (
      <div>
        <ExploreScreen/>
        <Link to="/labs">  Labs </Link> |
        <Link to="/hello"> Hello </Link>
      </div>
  )
};
export default Tuiter;
