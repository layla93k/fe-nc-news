import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CommentCard from "./CommentCard";
import { getArticleById } from "../Api";
import ArticleVotes from "./ArticleVotes";
import CommentAdder from "./CommentAdder";

export default function ArticleShowCard() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setSingleArticle(response.article[0]);
    });
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        <h2>{singleArticle.title}</h2>
        <img src={singleArticle.article_img_url} />
        <h4>{singleArticle.author}</h4>
        <h4>{singleArticle.topic}</h4>
        <p>{singleArticle.body}</p>
        <h5>Comments: {singleArticle.comment_count}</h5>
        <h5>
          <ArticleVotes article_id={article_id} />
        </h5>
      </div>
      <CommentAdder
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
      <CommentCard comments={comments} setComments={setComments} />
    </>
  );
}
