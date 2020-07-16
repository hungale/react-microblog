import * as t from "./actionTypes";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

export const getPostsFromAPI = () => {
  return async (dispatch) =>  {
    let res = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(loadPosts(res.data));
  };
}

const loadPosts = (data) => {
  return {
    type: t.LOAD_POSTS,
    payload: data
  };
}


export const getPostDetailsFromAPI = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`${BASE_URL}/api/posts/${id}`);
    dispatch(loadPostDetails(res.data));
  }
}

const loadPostDetails = (data) => {
  return {
    type: t.LOAD_POST_DETAILS,
    payload: data
  };
}


// newPost => {title, description, body}
export const addPost = (newPost) => {
  return {
    type: t.ADD_POST,
    payload: { ...newPost, comments: [] }
  };
}

// updatedPost => {title, description, body, comments: [...]}
export const updatePost = (id, updatedPost) => {
  return {
    type: t.UPDATE_POST,
    payload: { id, updatedPost }
  };
}

export const deletePost = (id) => {
  return {
    type: t.DELETE_POST,
    payload: id
  };
}

// comment => ""
export const addComment = ({ comment }, postId) => {
  return {
    type: t.ADD_COMMENT,
    payload: { comment, postId }
  };
}

export const deleteComment = (commentId, postId) => {
  return {
    type: t.DELETE_COMMENT,
    payload: { commentId, postId }
  };
}

