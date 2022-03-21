import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import '../explore.css'

const ExploreComponent = () => {
  return (
      <div>
        <div className="row">
          <div className="col-11 form-group">
            <span className="form-control-icon"><i className="fa fa-search"/></span>
            <input type="text" className="form-control" placeholder="Search Twitter"/>
          </div>
          <div className="col-1">
            <a href=""><i className="fa fa-cog fa-2x float-right"/></a>
          </div>
        </div>

        <div className="mt-2">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="for-you.html"> For You </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trending.html"> Trending </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="news.html"> News </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sports.html"> Sports </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="entertainment.html"> Entertainment </a>
            </li>
          </ul>
        </div>

        <div className="card small-margin">
          <img src="./images/SpaceX_starship.jpeg" className="card-img-top"/>
            <div
                className="card-img-overlay d-flex flex-column justify-content-end">
              <h1 className="white-color"> SpaceX's Starship</h1>
            </div>
        </div>
        {PostSummaryList()}
      </div>
);
}
export default ExploreComponent;
