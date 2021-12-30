import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
    </div>
  );
};

export default Feed;
