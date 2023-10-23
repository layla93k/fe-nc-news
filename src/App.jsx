import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";

function App() {
  const [articleList, setArticleList] = useState([]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/articles"
          element={
            <ArticleList
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
