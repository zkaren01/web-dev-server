import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import {Link} from "react-router-dom";
import ExploreComponent from "./explore/ExploreComponent";
import ExploreScreen from "./explore/ExploreScreen";

const Tuiter = () => {
  return(
      <>
        <ExploreScreen/>
        {/*<NavigationSidebar active="home"/>*/}
        {/*<ExploreComponent/>*/}
        {/*<PostSummaryList/>*/}
        {/*<PostSummaryItem post={{*/}
        {/*  "topic": "Web Development",*/}
        {/*  "userName": "",*/}
        {/*  "title": "jQuery",*/}
        {/*  "time": "last week",*/}
        {/*  "image": "./images/jquery.jpg",*/}
        {/*  "tweets": "122K"*/}
        {/*}}/>*/}
        {/*<WhoToFollowList/>*/}
        {/*<h1>Tuiter</h1>*/}
        {/*<Link to="/hello">*/}
        {/*  Hello*/}
        {/*</Link> |*/}
        {/*<Link to="/labs">*/}
        {/*  Labs*/}
        {/*</Link>*/}
      </>
)
};
export default Tuiter;
