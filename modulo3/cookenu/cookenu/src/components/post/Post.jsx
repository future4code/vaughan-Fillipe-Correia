import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState, useEffect, React } from "react";
import axios from "axios";
import reddit from "./reddit.png";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState("");
  const classes = useStyles();

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  useEffect (()=>{
    getPosts();
  },[])


  const getPosts = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://labeddit.herokuapp.com/posts", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = (postId) => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://labeddit.herokuapp.com/${postId}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
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
          <img
            className="postProfileImg"
            src={reddit}
            alt=""
          />
          <span className="postUsername">
            {postmap.username}
          </span>
          <span className="postDate">{postmap.createdAt}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{postmap.body}</span>
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
          <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
          <span className="postLikeCounter">{like} people like it</span>
        </div>
      </div>
        <div className="postBottomRight">
          <Accordion onClick={() => {
            const token = localStorage.getItem("token");
            axios
              .get(`https://labeddit.herokuapp.com/posts/${postmap.id}/comments`, {
                headers: {
                  Authorization: token,
                },
              })
              .then((res) => {
                console.log(res.data);
                setComments(res.data);
                console.log(comments);
              })
              .catch((err) => {
                console.log(err);
              });
          
          }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{postmap.commentCount} comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      <hr className="hr"></hr>
    </div>
 
 ))}
 </div>
     

  )
}
