import React from "react";
import PostForm from "./PostForm";

const NewPost = () => {
  return (
    <div className="NewPost">
      <h3 className="NewPost-title ml-5 mt-4 mb-3">Create a post</h3>
      <PostForm />
    </div>
  );
}

export default NewPost;
