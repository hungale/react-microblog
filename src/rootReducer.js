import * as t from "./actionTypes";

const DEFAULT_STATE = { posts: {}, titles: [], loading: true };

// const makeTitleFromPost = ({id, title, description, votes}) => {
//   return {id, title, description, votes};
// }

const rootReducer = (state = DEFAULT_STATE, action) => {
  let post; // WOULD-BE-NICE: change post to postCopy 
  switch (action.type) {
    case t.LOAD_POSTS:
      return { ...state, titles: action.payload };

    case t.LOAD_POST_DETAILS:
      return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } };

    case t.ADD_POST:
      // TODO: fix bug where the titles does not get updated when adding a new post.
      // let newTitle = makeTitleFromPost(action.payload);
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

    case t.UPDATE_VOTES:
      let postsCopy = { ...state.posts };

      post = { ...state.posts[action.payload.postId] };

      if (Object.keys(post).length !== 0) {
        post.votes = action.payload.votes;
        postsCopy = { ...postsCopy, [action.payload.postId]: post };
      }

      let updatedTitles = state.titles.map(title => {
        if (title.id === action.payload.postId) {
          let titleCopy = { ...title };
          titleCopy.votes = action.payload.votes;
          return titleCopy;
        } else {
          return title;
        }
      });

      return {
        ...state,
        posts: postsCopy,
        titles: updatedTitles
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

    case t.UPDATE_COMMENT:
      post = { ...state.posts[action.payload.postId] };
      post.comments = post.comments.map(comment => {
        if (comment.id === action.payload.id) {
          let commentCopy = { ...comment };
          commentCopy.text = action.payload.text;
          return commentCopy;
        } else {
          return comment;
        }
      });

      return { ...state, posts: { ...state.posts, [action.payload.postId]: post } };

    case t.START_LOADING:
      return { ...state, loading: true };

    case t.STOP_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default rootReducer;
