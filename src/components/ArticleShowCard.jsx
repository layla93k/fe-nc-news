import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

export default function ArticleShowCard({ articleList, setArticleList }) {
  const { article_id } = useParams();

  const getArticleById = () => {
    let path = `https://nc-news-back-end-project.onrender.com/api/articles/${article_id}`;
    return axios
      .get(path)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getArticleById().then((response) => {
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
    </>
  );
}
