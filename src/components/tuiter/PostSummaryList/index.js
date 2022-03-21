import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";
import '../explore.css'

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      {posts.map(posts => {
      return (<PostSummaryItem post={posts}/>);
      })}
    </ul>
  );
}

export default PostSummaryList