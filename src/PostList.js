import React from "react";
import PostListCard from "./PostListCard";
import "./PostList.css";

const PostList = ({ posts }) => {
  const renderPosts = () => (
    Object.keys(posts).map(id => (
      <PostListCard key={id} post={posts[id]} id={id} />
    ))
  );

  return (
    <ul className="PostList">
      {renderPosts()}
    </ul>
  );
};

export default PostList;