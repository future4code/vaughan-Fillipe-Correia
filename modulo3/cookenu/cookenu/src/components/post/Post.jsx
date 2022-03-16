import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, React } from "react";
import axios from "axios";
import reddit from "./reddit.png";
import arrowup from "./arrowup.png";
import arrowdown from "./arrowdown.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comments from "../comments/Comments";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Post({ post }) {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const CreatePostVote = (postIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: +1,
    };
    axios
      .post(`https://labeddit.herokuapp.com/posts/${postIdVote}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log("ERRO DO CREATE POST:", err.response);
      });
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const CreateComment = (postIdForThisComment) => {
    const token = localStorage.getItem("token");
    const body = {
      body: comment,
    };
    axios
      .post(
        `https://labeddit.herokuapp.com/posts/${postIdForThisComment}/comments`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log("ERRO DO CREATE COMMENT:", err.response);
      });
  };

  const ChangePostVote = (postIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: -1,
    };
    axios
      .put(`https://labeddit.herokuapp.com/posts/${postIdVote}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log("ERRO DO CHANGE POST VOTE:", err);
      });
  };

  const getPosts = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("https://labeddit.herokuapp.com/posts", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const showYourVote = (uservote) => {
    if (uservote === 1) {
      return <div className="upvotedText">You upvoted this post</div>;
    } else if (uservote === -1) {
      return <div className="downvotedText">You downvoted this post</div>;
    } else {
      return "You didn't vote this post";
    }
  };

  const formatDateToLocalDate = (date) => {
    const dateUTC = new Date(date);
    return dateUTC.toLocaleDateString();
  };

  const formatDateToLocalTime = (date) => {
    const dateUTC = new Date(date);
    return dateUTC.toLocaleTimeString();
  };

  const mapFunction = () => {
    const map = posts.map((postmap) => {
      return (
        <div key={postmap.id} className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={reddit} alt="" />
              <span className="postUsername">{postmap.username}</span>
              {/* convert date to UTC */}
              <span className="postDate">
                Posted: {formatDateToLocalDate(postmap.createdAt)} at:{" "}
                {formatDateToLocalTime(postmap.createdAt)}
              </span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postTitle">{postmap.title}</span>
            <span className="postText">{postmap.body}</span>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={arrowup}
                onClick={() => CreatePostVote(postmap.id)}
                alt="arrow up vote"
              />
              <img
                className="likeIcon"
                src={arrowdown}
                onClick={() => ChangePostVote(postmap.id)}
                alt="arrow down vote"
              />
              <span className="postLikeCounter">Votes: {postmap.voteSum}</span>
              <span className="postLikeCounter">
                {showYourVote(postmap.userVote)}
              </span>
            </div>
          </div>
          <div className="commentContainer">
            <input
              onChange={handleComment}
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
            />
            <button
              onClick={() => CreateComment(postmap.id)}
              className="commentButton"
            >
              Comment
            </button>
          </div>
          <div className="postBottomRight">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {postmap.commentCount} Comments
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Comments postId={postmap.id} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <hr className="hr"></hr>
        </div>
      );
    });

    return map;
  };

  return (
    <div className="post">
      {loading ? (
        <div className="loading">
          <CircularProgress style={{ color: "orangered" }} size="20em" />
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>{mapFunction()}</div>
      )}
    </div>
  );
}
