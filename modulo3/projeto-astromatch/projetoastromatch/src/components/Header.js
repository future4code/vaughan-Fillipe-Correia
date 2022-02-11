import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton/";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      <img
        className="header-img"
        src="https://cdn1.iconfinder.com/data/icons/social-media-black-white-1/1024/tinder-bw-256.png"
        alt="tinder logo"
      />
      <IconButton>
        <QuestionAnswerIcon className="header-icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
