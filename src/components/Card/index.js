import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "10px 20px 0 0",
    [theme.breakpoints.down(360)]: {
      width: 310,
    },
  },
  media: {
    height: 140,
  },
  bookTitle: {
    fontSize: 18,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  link: {
    textDecoration: "none",
    color: "#000"
  }
}));

const MediaCard = ({ mediaLink, title, author, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/book/${id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={mediaLink}
            title={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h4"
              className={classes.bookTitle}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/book/${id}`} className={classes.link}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
