import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CommentCard from "./CommentCard";
import { getArticleById } from "../Api";
import ArticleVotes from "./ArticleVotes";

export default function ArticleShowCard() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [votes, setVotes] = useState(0);

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
          <ArticleVotes votes={votes} setVotes={setVotes} />
        </h5>
      </div>

      <CommentCard />
    </>
  );
}
