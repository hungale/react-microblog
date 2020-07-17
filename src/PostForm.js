import React, { useState } from "react";
import * as a from "./actions"
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./PostForm.css";

const PostForm = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts[id];
  const dispatch = useDispatch();


  // TODO: differentiate between updating and creation
  // if it has an ID, just update, let the rootReducer handle it

  let INITIAL_STATE;
  if (post) {
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

  const handlePost = () => {
    if (id) {
      dispatch(a.updatePostInAPI(id, formData));
    } else { // no id
      dispatch(a.addPostToAPI(formData));
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handlePost();
    // sometimes it can redirect before it's even done putting in redux
    history.push("/");
  };

  return (
    <div className="PostForm">
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        <label htmlFor="description">Description</label>
        <input className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        <label htmlFor="body">Body</label>
        <textarea className="form-control" name="body" value={formData.body} onChange={handleChange} required />
        <Link to="/"><button className="btn btn-secondary float-right">Cancel</button></ Link>
        <button className="btn btn-primary float-right">Save</button>

      </form>

    </div>
  );
}

export default PostForm;