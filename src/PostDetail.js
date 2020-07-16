import React, { useEffect } from "react";
import { NavLink, useParams, Redirect, useHistory } from "react-router-dom";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import * as a from "./actions";

const PostDetail = () => {
  const { id } = useParams();
  const posts  = useSelector(state => state.posts);
  const post = posts[id];
  // const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(function handleGetPostDetails() {
    dispatch(a.getPostDetailsFromAPI(id));
  }, [dispatch, id]);

  if (!post) {
    return <Redirect to="/" />
  }

  const handleDelete = () => {
    dispatch(a.deletePost(id));
    history.push("/");
  };

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
      <hr />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostDetail;