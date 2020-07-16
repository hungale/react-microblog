import React, { useEffect, useState } from "react";
import { NavLink, useParams, Redirect, useHistory } from "react-router-dom";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import * as a from "./actions";

const PostDetail = () => {
  const { id } = useParams();
  const posts  = useSelector(state => state.posts);
  const post  = useSelector(state => state.posts[id]);
  // const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  // if(!post) {
  //   console.log("here");
  //   dispatch(a.getPostDetailsFromAPI(id));
  // }
  useEffect(() => {
    // const getPostDetails = async () => {
      //   dispatch(a.getPostDetailsFromAPI(id));
      //   setLoading(false)
    // };
    dispatch(a.getPostDetailsFromAPI(id));
  }, [dispatch, id]);

  // ASK: how to use loading state, so we don't have to click twice
  // if(loading) {
  //   return <p>hi</p>
  // }
  if (!post) {
    return <Redirect to="/" />
  }

  const handleDelete = () => {
    dispatch(a.deleteFromAPI(id));
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