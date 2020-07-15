import React from "react";
import { posts } from "./posts.json"
import { NavLink, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === +id);

  return (
    <div className="PostDetail">
      <h1>{post.title}
        <NavLink exact to={`/${id}/edit`}>
          <button>Edit</button>
        </NavLink>
        <NavLink exact to="/">
          <button>Delete</button>
        </NavLink>
      </h1>
      <h3>{post.description}</h3>
      <p>{post.body}</p>
      <hr />
      <h3>Comments</h3>
      <CommentForm />
    </div>
  );
};

export default PostDetail;