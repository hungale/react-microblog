import React from "react";
import PostListCard from "./PostListCard";
import { useSelector } from "react-redux";
import "./PostList.css";

const PostList = ({ posts }) => {
  const titles = useSelector(state => state.titles);

  const renderPosts = () => (
    // Object.keys(posts).map(id => (
    //   <PostListCard key={id} post={posts[id]} id={id} />
    // ))
    titles.map(post => (
      <PostListCard key={post.id} post={post} id={post.id} />
    ))
  );

  return (
    <ul className="PostList">
      {renderPosts()}
    </ul>
  );
};

export default PostList;