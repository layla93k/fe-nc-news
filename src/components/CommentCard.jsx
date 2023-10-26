import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Api";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard({ comments, setComments, setDeleteMsg }) {
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response.comments);
    });
  }, [comments]);

  return (
    <main>
      <ul className="comments">
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <p className="comment-body">{comment.body}</p>
              <h4 className="author">{comment.author}</h4>
              <h5 className="comment-votes">Votes: {comment.votes}</h5>

              <CommentDeleter
                commentId={comment.comment_id}
                setDeleteMsg={setDeleteMsg}
                commentAuthor={comment.author}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
