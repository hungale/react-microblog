import React, { useState } from "react";
import * as a from "./actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const INITIAL_STATE = { comment: "" }
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
    dispatch(a.addComment(formData, postId));
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="CommentForm">
      <input name="comment" value={formData.comment} placeholder="New Comment" onChange={handleChange} required />
      <button>Add</button>
    </form>
  );
};

export default CommentForm;