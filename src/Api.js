import axios from "axios";

export const getArticles = (topic) => {
  let path = "https://nc-news-back-end-project.onrender.com/api/articles";
  if (topic) {
    path += `?topic=${topic}`;
  }
  return axios
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("returning err");
      return err;
    });
};

export const getSortedArticles = (sort, orderby) => {
  let path = "https://nc-news-back-end-project.onrender.com/api/articles";

  if (sort) {
    path += `?sortby=${sort}&orderby=${orderby}`;
  }
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
  return axios.get(path).then((response) => {
    return response.data;
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

export const postComment = (comment, article_id) => {
  let path = `https://nc-news-back-end-project.onrender.com/api/articles/${article_id}/comments`;
  return axios
    .post(path, comment)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteComment = (comment_id) => {
  let path = `https://nc-news-back-end-project.onrender.com/api/comments/${comment_id}`;

  return axios
    .delete(path)
    .then((response) => {
      console.log(response, "deleted");
    })
    .catch((err) => {
      console.log(err, "there is an error");
    });
};
