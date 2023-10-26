import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Api";
import { useParams } from "react-router-dom";
import FilterBy from "./FilterBy";
import { getSortedArticles } from "../Api";
import SortBy from "./SortBy";
import Orderby from "./Orderby";
import ErrorComponent from "./ErrorComponent";

export default function ArticleList({ error, setError }) {
  const [articleList, setArticleList] = useState([]);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("desc");

  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((response) => {
        if (response.code === "ERR_BAD_REQUEST") {
          console.log("ive caught the error");
          setError(true);
        } else {
          setArticleList(response.articles);
          console.log(response, "response");
        }
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
      <NavBar />
      <FilterBy />
      <SortBy sort={sort} setSort={setSort} />
      <Orderby order={order} setOrder={setOrder} />
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

                <p> Comments {article.comment_count}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
