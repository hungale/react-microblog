import { faSpinner, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import * as a from "./actions";
import CommentList from "./CommentList";
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts[id]);
  const dispatch = useDispatch();
  const history = useHistory();

  // could possibly extract this to a custom hook if you felt like overengineering
  const loading = useSelector(state => state.loading);
  
  // clean up only when the component unmounts
  // https://stackoverflow.com/a/56795775
  useEffect(() => {
    return () => dispatch(a.startLoading());
  },[dispatch]);

  useEffect(() => {
    if(!post) {
      dispatch(a.getPostDetailsFromAPI(id));
    } else {
      dispatch(a.stopLoading());
    }
    // cleanup function, reset loading to true, happens too much
    // return () => dispatch(a.startLoading());
  }, [dispatch, id, post]);

  // ASK: how to use loading state, so we don't have to click twice
  if (loading) {
    return <FontAwesomeIcon icon={faSpinner} spin size="6x" />
  }
  console.log("past loading...", post);
  if (!post) {
    console.log("post...", post);
    return <Redirect to="/" />
  }

  const handleDelete = () => {
    dispatch(a.deleteFromAPI(id));
    history.push("/");
  };

  const votes = (direction, id) => {
    dispatch(a.updateVotesInAPI(direction, +id));
  }

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
      <span>{post.votes} votes</span>
      <button onClick={() => votes("up", id)}><FontAwesomeIcon icon={faThumbsUp} /></button>
      <button onClick={() => votes("down", id)}><FontAwesomeIcon icon={faThumbsDown} /></button>
      <p>{post.body}</p>
      <hr />
      <CommentList comments={post.comments.sort((a, b) => b.id - a.id)} />
    </div>
  );
};

export default PostDetail;