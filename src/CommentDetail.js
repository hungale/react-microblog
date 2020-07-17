import React, { useState } from "react";
import * as a from "./actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const CommentDetail = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleDelete = () => {
    const postId = id;
    dispatch(a.deleteCommentFromAPI(comment.id, postId));
  };

  return (
    <li className="CommentDetail">
      <button onClick={handleDelete}>x</button>
      <button onClick={handleEdit}>Edit</button>
      <span>{comment.text}</span>
      { isEdit ? <CommentForm text={comment.text} commentId={comment.id} handleEdit={handleEdit} /> : null}
    </li>
  );
};

export default CommentDetail;