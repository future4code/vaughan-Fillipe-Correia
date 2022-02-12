import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Profile.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 290,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="profile-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.postimg.cc/tC4F0QDW/IMG-20211204-100132-891.jpg"
            title="casalzão"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Fillipe Dias Correia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Estudante de Sistemas para Internet e aluno do curso Web Fullstack
              da Labenu. OBS: Não dê like em mim, tenho namorada e a amo muito
              hihihi.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
