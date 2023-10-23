import React from "react";
import Heart from "react-animated-heart";
import { useState } from "react";

export default function ArticleVotes({ votes, setVotes }) {
  const [isClick, setClick] = useState(false);
  const [userLikeInput, setUserLikeInput] = useState(0);

  const updateUserLikes = () => {
    setVotes(votes + 1);
    setUserLikeInput(1);
  };
  return (
    <div className="flex-div">
      <button disabled={userLikeInput === 1}>
        <Heart
          isClick={isClick}
          onClick={() => {
            updateUserLikes();
            setClick(true);
          }}
        />
      </button>

      <h5 className="numVotes">{votes}</h5>
    </div>
  );
}
