import React from "react";
import CommentForm from "./CommentForm";
import CommentDetail from "./CommentDetail";
import "./CommentList.css";

const CommentList = ({ comments }) => {

  const renderComments = () => (
    comments.map(comment => <CommentDetail key={comment.id} comment={comment} />)
  );

  return (
    <div className="CommentList">
      <h3>Comments</h3>
      <ul>
        {renderComments()}
      </ul>
      <CommentForm />
    </div>
  );
};

export default CommentList;