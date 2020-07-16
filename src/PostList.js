import React from "react";
import PostListCard from "./PostListCard";
import { useSelector } from "react-redux";
import "./PostList.css";

const PostList = () => {
  const titles = useSelector(state => state.titles);

  const renderPosts = () => (
    titles.map(title => (
      <PostListCard key={title.id} post={title} id={title.id} />
    ))
  );

  return (
    <ul className="PostList">
      {renderPosts()}
    </ul>
  );
};

export default PostList;