import React, { useState } from "react";

const CommentForm = () => {
  const INITIAL_STATE = { comment: "" }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted!", formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="CommentForm">
      <input name="comment" value={formData.comment} placeholder="New Comment" onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
};

export default CommentForm;