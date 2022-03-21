import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import '../explore.css'

const WhoToFollowList = () => {
  return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"><b>Who to follow</b></li>
          {
            who.map(who => {
            return (<WhoToFollowListItem who={who}/>);
          })
          }
        </ul>
      </div>
  );
}

export default WhoToFollowList