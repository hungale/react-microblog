import React, { useState } from "react";
import * as a from "./actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./CommentDetail.css";

/**
 * CommentDetail component renders a comment.
 * 
 * Handles the delete and edit changes of a comment.
 */
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
      <button className="CommentDetail-delete CommentDetail-btn" onClick={handleDelete}>x</button>
      <button className="CommentDetail-edit CommentDetail-btn" onClick={handleEdit}>Edit</button>
      <span className="CommentDetail-comment">{comment.text}</span>
      { isEdit ? <CommentForm text={comment.text} commentId={comment.id} handleEdit={handleEdit} /> : null}
    </li>
  );
};

export default CommentDetail;