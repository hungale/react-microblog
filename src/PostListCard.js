import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./PostListCard.css";

const PostListCard = ({ post, id, votes}) => {
  // display number of votes .. 
  return (
    <li className="PostListCard">
      <NavLink exact to={`/posts/${id}`}>{post.title}</NavLink>
      <p>{post.description}</p>
      <p>{post.votes} votes</p>
      <button onClick={() => votes("up", id)}><FontAwesomeIcon icon={faThumbsUp} /></button>
      <button onClick={() => votes("down", id)}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </li>
  );
};

export default PostListCard;