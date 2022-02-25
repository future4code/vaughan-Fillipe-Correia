import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./comments.css";
import reddit from "./reddit.png";
import arrowup from "./arrowup.png";
import arrowdown from "./arrowdown.png";
import { CircularProgress } from "@material-ui/core";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(`https://labeddit.herokuapp.com/posts/${props.postId}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const getComments = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(`https://labeddit.herokuapp.com/posts/${props.postId}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const CreateCommentVote = (commentIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: +1,
    };
    axios
      .put(
        `https://labeddit.herokuapp.com/comments/${commentIdVote}/votes`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        getComments();
      })
      .catch((err) => {
        console.log("ERRO DO CREATE COMMENT VOTE:", err.response);
      });
  };

  const ChangeCommentVote = (commentIdVote) => {
    const token = localStorage.getItem("token");
    const body = {
      direction: -1,
    };
    axios
      .put(
        `https://labeddit.herokuapp.com/comments/${commentIdVote}/votes`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        getComments();
      })
      .catch((err) => {
        console.log("ERRO DO CHANGE POST VOTE:", err);
      });
  };

  const showYourCommentVote = (uservote) => {
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
    const map = comments.map((comment) => {
      return (
          <div className="commentCard" key={comment.id}>
          <div className="commentCardHeader">
            <img className="postProfileImg" src={reddit} alt="" />
            <h3>{comment.username}</h3>
            <p>{formatDateToLocalDate(comment.createdAt)}</p>
            <p>{formatDateToLocalTime(comment.createdAt)}</p>
          </div>

          <div className="commentCardBody">
            <p>{comment.body}</p>
          </div>
          <div className="voteContainer">
            <img
              className="votearrow"
              src={arrowup}
              onClick={() => CreateCommentVote(comment.id)}
              alt="arrow up vote"
            />
            <img
              className="votearrow"
              src={arrowdown}
              onClick={() => ChangeCommentVote(comment.id)}
              alt="arrow up vote"
            />
            <span className="votecounter">Votes: {comment.voteSum}</span>
            <span className="votecounter">
              {showYourCommentVote(comment.userVote)}
            </span>
          </div>
        </div>
        );
    });

    return map;
  };

  return (
    <div>
      {loading ? (
      <div className="loading">
        <CircularProgress style={{ color: "orangered"}} size="10em" />
        <h1>Loading...</h1>
      </div>
    ) : (
      <div>{mapFunction()}</div>
    )}
    </div>
  );
};

export default Comments;
