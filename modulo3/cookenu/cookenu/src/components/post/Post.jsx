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

  useEffect(() => {
    getPosts();
  }, []);

  const CreatePostVote = (postIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: +1,
    };
    axios
      .post(
        `https://labeddit.herokuapp.com/posts/${postIdVote}/votes`,body,
        {
          headers: {
            Authorization: token,
          }
        },
      )
      .then((res) => {
        alert("You upvoted this post");
        getPosts();
      })
      .catch((err) => {
        console.log("ERRO DO CREATE POST:",err.response);
      });
  };
      


  const ChangePostVote = (postIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: -1,
    };
    axios
      .put(
        `https://labeddit.herokuapp.com/posts/${postIdVote}/votes`,body,
        {
          headers: {
            Authorization: token,
          }
        },
        
      )
      .then((res) => {
        alert("You downvoted this post");
        getPosts();
      })
      .catch((err) => {
        console.log("ERRO DO CHANGE POST VOTE:", err);
      });
  };

  const getPosts = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://labeddit.herokuapp.com/posts", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="post">
      {posts.map((postmap) => (
        <div key={postmap.id} className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={reddit} alt="" />
              <span className="postUsername">{postmap.username}</span>
              <span className="postDate">Posted at: {postmap.createdAt}</span>
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
              <span className="postLikeCounter">You voted: {postmap.userVote}</span>
            </div>
          </div>
          <div className="postBottomRight">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {postmap.commentCount} comments
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
      ))}
    </div>
  );
}
