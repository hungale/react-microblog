import * as t from "./actionTypes";
// import { posts } from "./posts";
import { v4 as uuid } from "uuid";
// should have empty default_state once we have backend 
const DEFAULT_STATE = { posts: {}, titles: []};

const rootReducer = (state = DEFAULT_STATE, action) => {
  let post; // WOULD-BE-NICE: change post to postCopy 
  switch (action.type) {
    case t.LOAD_POSTS:
      return {...state, titles : action.payload};
    
    case t.LOAD_POST_DETAILS:
      return {...state, posts: { ...state.posts, [action.payload.id]: action.payload }};

    case t.ADD_POST:
      return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } };
    case t.UPDATE_POST:
      // make a copy of the original post object from the state.
      const original = { ...state.posts[action.payload.id] };
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
      return { ...state, posts: postListCopy };
    case t.ADD_COMMENT:
      post = { ...state.posts[action.payload.postId] };
      post.comments = [
        ...post.comments,
        { id: action.payload.commentId, text: action.payload.text },
      ];
      return {
        ...state,
        posts: { ...state.posts, [action.payload.postId]: post },
      };
    case t.DELETE_COMMENT:
      post = { ...state.posts[action.payload.postId] };
      post.comments = post.comments.filter(comment => comment.id !== action.payload.commentId);
      return { ...state, posts: { ...state.posts, [action.payload.postId]: post } };
    default:
      return state;
  }
};

export default rootReducer;
