import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./PostForm.css";
import { posts } from "./posts.json"

const PostForm = () => {
  const { id } = useParams();
  const post = posts[id];

  // TODO: differentiate between updating and creation
  // if it has an ID, just update, let the rootReducer handle it

  let INITIAL_STATE;
  if(post) {
    INITIAL_STATE = {
      title: post.title,
      description: post.description,
      body: post.body
    };
  } else {
    INITIAL_STATE = { title: "", description: "", body: "" };
  }
  
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted!", formData);
    history.push("/");
  };

  return (
    <div className="PostForm">
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
    </div>
  );
}

export default PostForm;