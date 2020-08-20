import React from "react";
import "./TopPostsList.css";
/**
 * Display the top 5 trending posts 
 * 
 * Ordered by number of up votes
 */
const TopPostsList = () => {
  return (
    <div className="TopPostsList">
      <ol className="TopPostsList-list">
        <h3 className="TopPostsList-list-title">Top Posts</h3>
        <li>first oneeee</li>
      </ol>
    </div>
  );
}


export default TopPostsList;