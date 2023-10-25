import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Api";
import { useParams } from "react-router-dom";
import FilterBy from "./FilterBy";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((response) => {
      setArticleList(response.articles);
    });
  }, [topic]);

  return (
    <main>
      <NavBar />
      <FilterBy />
      <ul className="articles">
        {articleList.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li className="article" key={article.article_id}>
                <h2 className="title">{article.title}</h2>
                <img src={article.article_img_url} />
                <h4>{article.author}</h4>
                <h5 className="topic">{article.topic}</h5>
                <p className="votes"> ❤️ {article.votes}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
