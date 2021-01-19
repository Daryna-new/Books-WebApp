import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LogoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    borderRadius: "50%",
    width: 35,
    height: 35,
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/">
            <img src={LogoImg} className={classes.logo} alt="logo"/>
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>Books App</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
