import React from "react";
import { Avatar } from "@material-ui/core";
import './css/QuoraBox.css'
const QuoraBox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
      </div>
      <div className="quoraBox__quora">What is your question or link</div>
    </div>
  );
};

export default QuoraBox;
