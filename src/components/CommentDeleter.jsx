import React from "react";
import { deleteComment } from "../Api";
import { useState } from "react";
import "../comments.css";

export default function CommentDeleter({
  commentId,
  setDeleteMsg,
  commentAuthor,
}) {
  const [user, setUser] = useState("tickle122");
  const handleClick = () => {
    deleteComment(commentId, user).then((res) => {
      setDeleteMsg("Your comment has been deleted");
    });
  };

  return user === commentAuthor ? (
    <div>
      <button onClick={handleClick} className="delete-btn">
        🗑️ Delete
      </button>
    </div>
  ) : null;
}
