import * as t from "./actionTypes";

export const addPost = (post) => {
  return {
    type: t.ADD_POST,
    payload: post
  }
}