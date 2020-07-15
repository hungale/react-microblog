import * as t from "./actionTypes";
import { posts } from "./posts";
import { v4 as uuid } from "uuid";

const DEFAULT_STATE = { posts };

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case t.ADD_POST:
      return { ...state, posts: { ...state.posts, [uuid()]: action.payload } };
    case t.UPDATE_POST:
      // make a copy of the original post object from the state.
      const original = { ...state.posts[action.payload.id] };
      // change the state.posts object to be this.
      return {
        ...state,
        posts: {
          [action.payload.id]: {
            ...original,
            ...action.payload.updatedPost,
          },
        },
      };
    case t.DELETE_POST:
      const postListCopy = { ...state.posts };
      delete postListCopy[action.payload]
      return { ...state, posts: postListCopy};
    default:
      return state;
  }
};

export default rootReducer;
