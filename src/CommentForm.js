import React, { useState } from "react";
import * as a from "./actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./CommentForm.css";

const CommentForm = ({ text = "", commentId = undefined, handleEdit }) => {
  const INITIAL_STATE = commentId ? { text , commentId } : { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { id } = useParams();
  const dispatch = useDispatch();


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const postId = id;
    if (commentId) {
      handleEdit();
      dispatch(a.updateCommentInAPI(formData, commentId, postId))
    } else {
      dispatch(a.addCommentToAPI(formData, postId));
    }
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="CommentForm">
      <input name="text" value={formData.text} placeholder="New Comment" onChange={handleChange} required />
      <button>Add</button>
    </form>
  );
};

export default CommentForm;