import React from "react";
import { useState } from "react";
import { postComment } from "../Api";

export default function CommentAdder({ setComments, article_id }) {
  const [newComment, setNewComment] = useState({
    username: "tickle122",
    body: "",
  });
  const [commentAdded, setCommentAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment({
      username: "tickle122",
      body: "",
    });
    postComment(newComment, article_id)
      .then((res) => {
        setCommentAdded(true);
        setComments((currentComments) => {
          return [res.data.yourNewComment, ...currentComments];
        });
      })
      .catch((err) => {
        setError(true);
      });
  };

  const handleChange = (event) => {
    const commentInput = event.target.value;
    setNewComment({ ...newComment, [event.target.name]: commentInput });
  };

  return (
    <>
      {!error ? (
        <div className="comment-add-section">
          {commentAdded && <p>Your comment has been successfully posted!</p>}
          <form onSubmit={handleSubmit}>
            <label className="comment-label">
              Your comment:
              <input
                className="comment-input"
                value={newComment.body}
                onChange={handleChange}
                name="body"
                placeholder="Please write your comment here..."
              />
            </label>

            <button
              disabled={!newComment.body || commentAdded}
              className="comment-btn"
              type="submit"
              onClick={() => {}}
            >
              Add comment
            </button>
          </form>
        </div>
      ) : (
        <p className="err"> Your comment has not been added</p>
      )}
    </>
  );
}
