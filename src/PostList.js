import React from "react";
import PostListCard from "./PostListCard";
import "./PostList.css";

const PostList = ({ posts }) => {
  const renderPosts = () => (
    posts.map(post => (
      <PostListCard key={post.id} post={post} />
    ))
  );

  return (
    <ul className="PostList">
      {renderPosts()}
    </ul>
  );
};

export default PostList;