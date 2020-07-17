import React from "react";
import PostListCard from "./PostListCard";
import { useSelector, useDispatch } from "react-redux";
import * as a from "./actions";
import "./PostList.css";

const PostList = () => {
  const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();

  const renderPosts = () => (
    titles.map(title => (
      <PostListCard key={title.id} post={title} id={title.id} votes={votes} />
    ))
  );

  const votes = (direction, id) => {
    // dispatch to updateVotes(direction, id);
    dispatch(a.updateVotesInAPI(direction, id));
  }

  return (
    <ul className="PostList">
      {renderPosts()}
    </ul>
  );
};

export default PostList;