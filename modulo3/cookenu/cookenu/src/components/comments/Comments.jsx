import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./comments.css";
import reddit from "./reddit.png";
import arrowup from "./arrowup.png";
import arrowdown from "./arrowdown.png";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://labeddit.herokuapp.com/posts/${props.postId}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getComments = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://labeddit.herokuapp.com/posts/${props.postId}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const CreateCommentVote = (commentIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: +1,
    };
    axios
      .put(
        `https://labeddit.herokuapp.com/comments/${commentIdVote}/votes`,body,
        {
          headers: {
            Authorization: token,
          }
        },
      )
      .then((res) => {
        alert("You upvoted for this comment");
        getComments();

      })
      .catch((err) => {
        console.log("ERRO DO CREATE COMMENT VOTE:",err.response);
      });
  };

  const ChangeCommentVote = (commentIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: -1,
    };
    axios
      .put(
        `https://labeddit.herokuapp.com/comments/${commentIdVote}/votes`,body,
        {
          headers: {
            Authorization: token,
          }
        },
        
      )
      .then((res) => {
        alert("You downvoted this comment");
        getComments();
      })
      .catch((err) => {
        console.log("ERRO DO CHANGE POST VOTE:", err);
      });
  };

  return (
    <div>
      {comments.map((comment) => (
        <div className="commentCard" key={comment.id}>
          <div className="commentCardHeader">
            <img className="postProfileImg" src={reddit} alt="" />
            <h3>{comment.username}</h3>
          </div>

          <div className="commentCardBody">
          <p>{comment.body}</p>
          </div>
          <div className="voteContainer">
          <img  className="votearrow" src={arrowup}
                onClick={() => CreateCommentVote(comment.id)}
                alt="arrow up vote"
              />
          <img  className="votearrow" src={arrowdown}
                onClick={() => ChangeCommentVote(comment.id)}
                alt="arrow up vote"
              />
          <span className="votecounter">{comment.voteSum} Votes</span>
          <span className="votecounter">You voted:{comment.userVote}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
