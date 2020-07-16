import * as t from "./actionTypes";

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

