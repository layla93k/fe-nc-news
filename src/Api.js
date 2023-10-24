import axios from "axios";

export const getArticles = () => {
  let path = "https://nc-news-back-end-project.onrender.com/api/articles";

  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
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
      return err;
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
      return err;
    });
};

export const updateLikes = (votes, article_id) => {
  let path = `https://nc-news-back-end-project.onrender.com/api/articles/${article_id}`;
  return axios
    .patch(path, votes)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
