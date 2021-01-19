import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => ({
  autocompleteWrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 20,
  },
  textField: {
    border: "1px solid #ccc",
    borderRadius: "4px 4px 0 0",
    width: "100%",
    height: 37,
    padding: 5,
    boxSizing: "border-box",
    outline: "none",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "scroll",
    maxHeight: 180,
    background: "#fff",
    borderRadius: "0 0 20px 20px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    position: "absolute",
    zIndex: 2,
    top: 36,
  },
  inputWrapper: {
    width: 600,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
    [theme.breakpoints.down(360)]: {
      width: 200,
    },
  },
  option: {
    padding: 20,
    transition: ".4s",
    cursor: "pointer",
    "&:hover": {
      background: "#4589f4",
      color: "#fff",
    },
  },
  searchBtn: {
    marginLeft: 20,
  },
  loader: {
    display: "flex",
    justifyContent: "center",
  },
}));

const AutocompleteInput = ({
  booksList,
  onChange,
  isLoading,
  selectOption,
  searchBook,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className={classes.autocompleteWrapper}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.inputWrapper} onClick={handleOpen}>
          <input
            onChange={onChange}
            value={value}
            className={classes.textField}
          />
          {open && booksList && booksList.length !== 0 && (
            <div className={classes.list}>
              {isLoading ? (
                <div className={classes.loader}>
                  <CircularProgress />
                </div>
              ) : (
                <>
                  {booksList.map((el) => (
                    <div
                      key={el.id}
                      className={classes.option}
                      onClick={() => {
                        selectOption();
                        handleOpen();
                      }}
                    >
                      {el.volumeInfo && el.volumeInfo.title}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </ClickAwayListener>
      <Button
        variant="contained"
        color="primary"
        onClick={searchBook}
        className={classes.searchBtn}
        disabled={!value}
      >
        Search
      </Button>
    </div>
  );
};

export default AutocompleteInput;
