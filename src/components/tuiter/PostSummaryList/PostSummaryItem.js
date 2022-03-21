import React from "react";
import '../explore.css'

const PostSummaryItem = (
    {
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "./images/reactJS.jpeg"
      }
    }
) => {
  return (
      <div>
        <li className="list-group-item">
          <div className="row">
            <div className="col-10">
              <span className="content-format-gray"> {post.topic} </span>
              <br/>
              <b> {post.userName}</b> <i className="fas fa-check-circle"/>
              <span className="content-format-gray"> - {post.time} </span>
              <br/>
              <b> {post.title} </b>
              <br/>
              <span className="content-format-gray"> {post.tweets} </span>
            </div>
            <div className="col-2">
              <img className="content-img" src={post.image}/>
            </div>
          </div>
        </li>
      </div>
)
;
}
export default PostSummaryItem;