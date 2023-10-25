import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import ArticleShowCard from "./components/ArticleShowCard";
import UserIcon from "./components/UserIcon";

function App() {
  return (
    <div className="app">
      <UserIcon />
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleShowCard />} />
        <Route path="/articles/topics/:topic" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
