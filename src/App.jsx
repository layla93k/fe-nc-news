import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import ArticleShowCard from "./components/ArticleShowCard";

function App() {
  const [articleList, setArticleList] = useState([]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              articleList={articleList}
              setArticleList={setArticleList}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <ArticleList
              articleList={articleList}
              setArticleList={setArticleList}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticleShowCard
              articleList={articleList}
              setArticleList={setArticleList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
