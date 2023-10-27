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
  isLoading,
  setIsLoading,
}) {
  const [articleList, setArticleList] = useState([]);
  const { topic } = useParams();
  const [topicName, setTopicName] = useState(topic);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicName)
      .then((response) => {
        setError(false);
        setIsLoading(false);
        setArticleList(response.articles);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [topicName]);

  useEffect(() => {
    setIsLoading(true);
    getSortedArticles(sort, order)
      .then((response) => {
        setIsLoading(false);
        setArticleList(response.articles);
      })
      .catch((err) => {
        console.log("in the sort catch");
        setError(true);
        setIsLoading(false);
      });
  }, [sort, order]);

  return error ? (
    <ErrorComponent setError={setError} />
  ) : isLoading ? (
    <span className="loader"></span>
  ) : (
    <main>
      <NavBar
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
        topicName={topicName}
        setTopicName={setTopicName}
      />

      <div className="card">
        <ul className="articles">
          {articleList.map((article) => {
            return (
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <li className="article">
                  <h2 className="title">{article.title}</h2>
                  <h4 className="author">{article.author}</h4>
                  <p className="date">{article.created_at.slice(0, 10)}</p>
                  <img
                    className="article-image"
                    src={article.article_img_url}
                  />
                  <h5 className="topic">{article.topic}</h5>
                  <p className="votes"> ❤️ {article.votes}</p>

                  <p className="article-comments-count">
                    {" "}
                    💬 {article.comment_count}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
