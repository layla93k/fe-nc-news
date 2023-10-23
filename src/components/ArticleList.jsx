import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useEffect } from "react";

export default function ArticleList({ articleList, setArticleList }) {
  const getArticles = () => {
    let path = "https://nc-news-back-end-project.onrender.com/api/articles";

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
    getArticles().then((response) => {
      console.log(response);
      setArticleList(response.articles);
    });
  }, []);

  return (
    <div className="main">
      <NavBar />
      <ul className="articles">
        {articleList.map((article) => {
          return (
            <li className="article" key={article.article_id}>
              <h2 className="title">{article.title}</h2>
              <img src={article.article_img_url} />
              <h4>{article.author}</h4>
              <h5 className="topic">{article.topic}</h5>
              <p className="votes">Votes</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
