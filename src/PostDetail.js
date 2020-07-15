import React from "react";
import { posts } from "./posts.json"
import { NavLink, useParams } from "react-router-dom";
import CommentList from "./CommentList";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts[id];

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
      <hr/>
      <CommentList comments={post.comments}/>
    </div>
  );
};

export default PostDetail;