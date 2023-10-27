import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CommentCard from "./CommentCard";
import { getArticleById } from "../Api";
import ArticleVotes from "./ArticleVotes";
import CommentAdder from "./CommentAdder";
import ErrorComponent from "./ErrorComponent";

export default function ArticleShowCard({ isLoading, setIsLoading }) {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setErr(false);
        setIsLoading(false);
        setSingleArticle(response.article[0]);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
        setIsLoading(false);
      });
  }, []);

  return err ? (
    <ErrorComponent setErr={setErr} />
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <NavBar />
      <div className="article-container">
        <h2 className="singlearticle-title">{singleArticle.title}</h2>
        <img src={singleArticle.article_img_url} />
        <h4>{singleArticle.author}</h4>
        <h4>{singleArticle.topic}</h4>
        <p>{singleArticle.body}</p>
        <h5 className="singlearticle-comment-count">
          💬 {singleArticle.comment_count}
        </h5>
        <ArticleVotes
          totalVotes={singleArticle.votes}
          article_id={article_id}
        />
      </div>
      <CommentAdder
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
      <p className="delete-msg">{deleteMsg}</p>
      <CommentCard
        comments={comments}
        setComments={setComments}
        setDeleteMsg={setDeleteMsg}
      />
    </>
  );
}
