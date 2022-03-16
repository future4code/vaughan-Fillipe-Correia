import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function Share() {
const [postText, setPostText] = useState("");
const [postTitle, setPostTitle] = useState("");
const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const getPosts = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("https://labeddit.herokuapp.com/posts?page=1&size=5", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const submitPost = (e) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const body = {
      title: postTitle,
      body: postText,
    };
    e.preventDefault();
    
    axios
      .post("https://labeddit.herokuapp.com/posts", body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setLoading(false);
        getPosts();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.png" alt="" />
          <input onChange={handleTitleChange}
            placeholder="Post title"
            className="shareInput"
          />
          <input onChange={handleInputChange}
            placeholder="What's in your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button onClick={submitPost} className="shareButton">{loading ? <CircularProgress style={{ color: "white" }} size="1em" /> : <p>Post</p>}</button>
        </div>
      </div>
    </div>
  );
}
