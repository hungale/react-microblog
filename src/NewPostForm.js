import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const NewPostForm = () => {
  const INITIAL_STATE = { title: "", description: "", body: "" }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted!", formData);
    history.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" value={formData.title} onChange={handleChange} required />
        <label htmlFor="description">Description</label>
        <input name="description" value={formData.description} onChange={handleChange} required />
        <label htmlFor="body">Body</label>
        <textarea name="body" value={formData.body} onChange={handleChange} required />
        <button>Save</button>
      </form>
      <Link to="/"><button>Cancel</button></ Link>
    </>
  );
}

export default NewPostForm;