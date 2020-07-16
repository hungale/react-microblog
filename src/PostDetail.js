import React, { useEffect } from "react";
import { NavLink, useParams, Redirect, useHistory } from "react-router-dom";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import * as a from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PostDetail = () => {
  const { id } = useParams();
  const post  = useSelector(state => state.posts[id]);
  const dispatch = useDispatch();
  const history = useHistory();

  // could possibly extract this to a custom hook if you felt like overengineering
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    if(!post) {
      dispatch(a.getPostDetailsFromAPI(id));
    } else {
      dispatch(a.stopLoading());
    }
    // cleanup function, reset loading to true
    return () => dispatch(a.startLoading());
  }, [dispatch, id, post]);

  // ASK: how to use loading state, so we don't have to click twice
  if(loading) {
    return <FontAwesomeIcon icon={faSpinner} spin size="6x"/>
  }
  if (!post) {
    return <Redirect to="/" />
  }

  const handleDelete = () => {
    dispatch(a.deleteFromAPI(id));
    history.push("/");
  };

  // could also do:
  // { body, description, body } = post 
  
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