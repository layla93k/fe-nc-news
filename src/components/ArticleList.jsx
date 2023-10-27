import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Api";
import { useParams } from "react-router-dom";
import FilterBy from "./FilterBy";
import { getSortedArticles } from "../Api";
import ErrorComponent from "./ErrorComponent";
import "../Articles.css";

export default function ArticleList({
  error,
  setError,
  sort,
  setSort,
  order,
  setOrder,
}) {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((response) => {
        setError(false);
        setIsLoading(false);
        setArticleList(response.articles);
      })
      .catch((err) => {
        setError(true);
      });
  }, [topic]);

  useEffect(() => {
    getSortedArticles(sort, order)
      .then((response) => {
        setArticleList(response.articles);
      })
      .catch((err) => {
        console.log("in the sort catch");
        setError(true);
      });
  }, [sort, order]);

  return error ? (
    <ErrorComponent setError={setError} />
  ) : (
    <main>
      <NavBar sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
      <FilterBy />

      <div className="gallery">
        <ul className="articles">
          {articleList.map((article) => {
            return (
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <li className="article">
                  <h2 className="title">{article.title}</h2>
                  <h4>{article.author}</h4>
                  <p>{article.created_at.slice(0, 10)}</p>
                  <img src={article.article_img_url} />
                  <h5 className="topic">{article.topic}</h5>
                  <p className="votes"> ❤️ {article.votes}</p>

                  <p className="comments"> 💬 {article.comment_count}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
