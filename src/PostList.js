import React from "react";
import PostListCard from "./PostListCard";
import { useSelector, useDispatch } from "react-redux";
import * as a from "./actions";
import "./PostList.css";

/**
 * PostList renders the most recent posts in a list.
 * 
 * `votes` method is passed down to every PostListCard component as a prop
 *  to handle votes for each post. 
 */
const PostList = () => {
  const titles = useSelector(state => state.titles);
  const dispatch = useDispatch();

  const renderPosts = () => {
    const recentTitles = titles.slice().reverse();

    // if there aren't any titles created yet, render this message instead of 
    // keeping list empty. 
    if (recentTitles.length === 0) {
      return <p className="PostList-message">No micro-posts yet. Be the first to create a micro-post!</p>
    } 

    return recentTitles.map(title => (
      <PostListCard key={title.id} post={title} id={title.id} votes={votes} />
    ));
  }

  const votes = (direction, id) => {
    // dispatch to updateVotes(direction, id);
    dispatch(a.updateVotesInAPI(direction, id));
  }

  return (
    <div className="PostList">
      <h4 className="PostList-title">Most Recent</h4>
      <ul className="PostList-list">
        {renderPosts()}
      </ul>
    </div>
  );
};

export default PostList;