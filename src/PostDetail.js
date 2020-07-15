import React from "react";
import { NavLink, useParams, Redirect, useHistory } from "react-router-dom";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "./actions";

const PostDetail = () => {
  const { id } = useParams();
  const posts  = useSelector(state => state.posts);
  const post = posts[id];
  const dispatch = useDispatch();
  const history = useHistory();

  if(!post) {
    return <Redirect to="/"/>
  }
  const handleDelete = () => {
    dispatch(deletePost(id));
    history.push("/");
  };

  // figure out PostDisplay
  // add handler for deleting/updating posts/comments

  return (
    <div className="PostDetail">
      <h1>{post.title}
        <NavLink exact to={`/posts/${id}/edit`}>
          <button>Edit</button>
        </NavLink>
        <NavLink exact to="/">
          <button onClick={handleDelete}>Delete</button>
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