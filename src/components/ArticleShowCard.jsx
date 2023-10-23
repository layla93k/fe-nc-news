import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CommentCard from "./CommentCard";
import { getArticleById } from "../Api";

export default function ArticleShowCard({ articleList, setArticleList }) {
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleList(response.article[0]);
    });
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        <h2>{articleList.title}</h2>
        <img src={articleList.article_img_url} />
        <h4>{articleList.author}</h4>
        <h4>{articleList.topic}</h4>
        <p>{articleList.body}</p>
        <h5>Comments: {articleList.comment_count}</h5>
        <h5>Votes: {articleList.votes}</h5>
      </div>

      <CommentCard />
    </>
  );
}
