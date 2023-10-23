import axios from "axios";
import { useParams } from "react-router-dom";

export const getArticles = () => {
  let path = "https://nc-news-back-end-project.onrender.com/api/articles";

  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (article_id) => {
  let path = `https://nc-news-back-end-project.onrender.com/api/articles/${article_id}`;
  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComments = (article_id) => {
  let path = `https://nc-news-back-end-project.onrender.com/api/articles/${article_id}/comments`;
  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
