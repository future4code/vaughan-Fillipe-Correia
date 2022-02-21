import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton/";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton>
          <img
            className="header-img"
            src="https://cdn1.iconfinder.com/data/icons/social-media-black-white-1/1024/tinder-bw-256.png"
            alt="tinder logo"
          />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
