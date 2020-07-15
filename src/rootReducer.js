import * as t from "./actionTypes";
import { posts } from "./posts";

const DEFAULT_STATE = { posts }

const rootReducer = ( state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case t.ADD_POST:
      return state;
    default:
      return state;
  }
};

export default rootReducer;