import React from "react";
import "./TopPostsList.css";
import { useSelector } from "react-redux";
import TopPostCard from "./TopPostCard";

/**
 * Display the top 10 trending posts 
 * 
 * Ordered by number of up votes
 */
const TopPostsList = () => {
  const titles = useSelector(state => state.titles);
  
  const renderPosts = () => {
    // make a copy of titles so it doesn't affect the titles state.
    const topTitles = titles.slice().sort((a,b) => b.votes - a.votes).slice(0,11);
    return topTitles.map(title => <TopPostCard key={title.id} post={title} />);
  }

  return (
    <div className="TopPostsList">
      <h4 className="TopPostsList-list-title">Top Posts</h4>
      <ol className="TopPostsList-list">
        {renderPosts()}
      </ol>
    </div>
  );
}


export default TopPostsList;