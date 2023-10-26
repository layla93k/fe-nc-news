import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import ArticleShowCard from "./components/ArticleShowCard";
import UserIcon from "./components/UserIcon";
import ErrorComponent from "./components/ErrorComponent";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("desc");
  return (
    <div className="app">
      <UserIcon />
      <Header />
      <Routes>
        <Route path="/*" element={<ErrorComponent />} />
        <Route path="/" element={<Welcome />} />
        <Route
          path="/articles/:article_id"
          element={<ArticleShowCard error={error} setError={setError} />}
        />
        <Route
          path="/articles/topics/:topic"
          element={<ArticleList error={error} setError={setError} />}
        />
        <Route
          path="/articles"
          element={
            <ArticleList
              order={order}
              setOrder={setOrder}
              sort={sort}
              setSort={setSort}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
