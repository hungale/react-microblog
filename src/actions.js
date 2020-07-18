import * as t from "./actionTypes";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

export const getPostsFromAPI = () => {
  // try-catch block would be nice refactor for AJAX requests
  return async (dispatch) => {
    let res = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(loadPosts(res.data));
  };
};

export const getPostDetailsFromAPI = (id) => {
  return async (dispatch) => {
    // dispatch(startLoading());
    let res = await axios.get(`${BASE_URL}/api/posts/${id}`);
    // if invalid, res.data comes back as ""
    dispatch(loadPostDetails(res.data));
    dispatch(stopLoading());
  };
};

export const addPostToAPI = (newPost) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}/api/posts`, newPost);
    dispatch(addPost(res.data));
  };
};

export const updatePostInAPI = (id, updatedPost) => {
  return async (dispatch) => {
    const res = await axios.put(`${BASE_URL}/api/posts/${id}`, updatedPost);
    dispatch(updatePost(res.data));
  };
};

export const deleteFromAPI = (id) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/api/posts/${id}`);
    dispatch(deletePost(id));
  }
}

export const addCommentToAPI = ({ text }, postId) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`,
      { text });
    // note, it will return message: deleted even if it doesn't exist
    dispatch(addComment(res.data, postId));
  };
};

export const deleteCommentFromAPI = (commentId, postId) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);

    // note, it will return message: deleted even if it doesn't exist
    dispatch(deleteComment(commentId, postId));
  };
};

export const updateVotesInAPI = (direction, postId) => {
  return async (dispatch) => {
    let res = await axios.post(`${BASE_URL}/api/posts/${postId}/vote/${direction}`);
    dispatch(updateVotes(res.data, postId));
  }
}

export const updateCommentInAPI = ({ text }, commentId, postId) => {
  return async (dispatch) => {
    let res = await axios.put(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`, { text, id: commentId });
    dispatch(updateComment(res.data, postId));
  }
}

// action creators
export const startLoading = () => {
  return { type: "START_LOADING" };
}

export const stopLoading = () => {
  return { type: "STOP_LOADING" };
}
const loadPosts = (data) => {
  return {
    type: t.LOAD_POSTS,
    payload: data
  };
};

const loadPostDetails = (data) => {
  return {
    type: t.LOAD_POST_DETAILS,
    payload: data
  };
};

// newPost => {title, description, body}
const addPost = (newPost) => {
  return {
    type: t.ADD_POST,
    payload: { ...newPost, comments: [] }
  };
};

// updatedPost => {title, description, body, comments: [...]}
const updatePost = (updatedPost) => {
  return {
    type: t.UPDATE_POST,
    payload: updatedPost
  };
};

const deletePost = (id) => {
  return {
    type: t.DELETE_POST,
    payload: id
  };
}

// comment => ""
const addComment = ({ text, id }, postId) => {
  return {
    type: t.ADD_COMMENT,
    payload: { text, commentId: id, postId }
  };
};

const deleteComment = (commentId, postId) => {
  return {
    type: t.DELETE_COMMENT,
    payload: { commentId, postId }
  };
};

const updateVotes = ({ votes }, postId) => {
  return {
    type: t.UPDATE_VOTES,
    payload: { votes, postId }
  }
}

const updateComment = ({ id, text }, postId) => {
  return {
    type: t.UPDATE_COMMENT,
    payload: { id, text, postId }
  }
}