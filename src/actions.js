import * as t from "./actionTypes";

export const addPost = (newPost) => {
  return {
    type: t.ADD_POST,
    payload: {...newPost, comments: []}
  }
}
export const updatePost = (id, updatedPost) => {
  return {
    type: t.UPDATE_POST,
    payload: {id, updatedPost}
  }
}
export const deletePost = (id) => {
  return {
    type: t.DELETE_POST,
    payload: id
  }
}