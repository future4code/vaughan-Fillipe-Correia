import React from "react";
import axios from "axios";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton/";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";

import "./SwipeButtons.css";

const SwipeButtons = (props) => {
  const clearMatches = () => {
    if (window.confirm("Are you sure you want to clear your matches?")) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/clear"
        )
        .then((res) => {
          console.log(res.data);
          alert("Matches cleared!");
        })
        .catch((err) => {
          console.log("Ocorreu um erro:", err);
        });
    }
  };

  return (
    <div className="swipeButtons">
      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={clearMatches}>
        <RestoreFromTrashIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={props.swipeRight}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
