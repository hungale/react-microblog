import React from "react";
import * as a from "./actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CommentDetail = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const postId = id;
    dispatch(a.deleteComment(comment.id, postId));
  }

  return (
    <li className="CommentDetail">
      <button onClick={handleDelete}>x</button>
      <span>{comment.text}</span>
    </li>
  );
};

export default CommentDetail;