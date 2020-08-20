import React from "react";
import PostForm from "./PostForm";
import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="NewPost">
      <h3 className="NewPost-title ml-5 mb-3">Create a post</h3>
      <PostForm />
    </div>
  );
};

export default NewPost;