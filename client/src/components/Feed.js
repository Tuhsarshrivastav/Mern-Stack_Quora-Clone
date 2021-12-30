import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
import Widget from "./Widget";
const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
    </div>
  );
};

export default Feed;
