import React from "react";
import Heart from "react-animated-heart";
import { useState } from "react";
import { updateLikes } from "../Api";

export default function ArticleVotes({ totalVotes, article_id }) {
  const [isClick, setClick] = useState(false);
  const [userLikeInput, setUserLikeInput] = useState(0);
  const [userDislikeInput, setUserDislikeInput] = useState(0);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(false);

  const updateUserLikes = (vote) => {
    setVotes((currVote) => {
      return currVote + vote;
    });
    setUserLikeInput(1);
    setUserDislikeInput(1);
  };

  const handleLike = () => {
    updateLikes({ inc_votes: 1 }, article_id)
      .then((res) => {
        console.log(res);
        updateUserLikes(1);
      })
      .catch((err) => {
        setErr(true);
      });
  };

  const handleDislike = () => {
    updateLikes({ inc_votes: -1 }, article_id)
      .then((res) => {
        updateUserLikes(-1);
      })
      .catch((err) => {
        setErr(true);
      });
  };

  return (
    <div className="votes-container">
      <button
        id="dislike-btn"
        disabled={userDislikeInput === 1}
        onClick={() => {
          setClick(false);
          handleDislike();
        }}
      >
        {" "}
        -
      </button>

      <h5 className="numVotes">{totalVotes + votes}</h5>

      <button disabled={userLikeInput === 1} id="heart-btn">
        <Heart
          isClick={isClick}
          onClick={() => {
            setClick(true);
            handleLike();
          }}
        />
      </button>
      {err ? <p>Votes not updated!</p> : null}
    </div>
  );
}
