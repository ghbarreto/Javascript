import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src="https://source.unsplash.com/random" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 3:00 PM</span>
        </div>
        <div className="text">{faker.git.commitMessage()}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
