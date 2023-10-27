import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import ArticleShowCard from "./components/ArticleShowCard";
import ErrorComponent from "./components/ErrorComponent";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/*" element={<ErrorComponent />} />
        <Route path="/" element={<Welcome />} />
        <Route
          path="/articles/:article_id"
          element={
            <ArticleShowCard
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles/topics/:topic"
          element={
            <ArticleList
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <ArticleList
              order={order}
              setOrder={setOrder}
              sort={sort}
              setSort={setSort}
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
