import React from "react";

const CommentDetail = ({ comment }) => {
  // TODO: make handleDelete for button. 
  return (
    <li className="CommentDetail">
      <button>x</button>
      <span>{comment.text}</span>
    </li>
  );
};

export default CommentDetail;