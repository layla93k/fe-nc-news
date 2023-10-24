import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import ArticleShowCard from "./components/ArticleShowCard";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleShowCard />} />
      </Routes>
    </div>
  );
}

export default App;
