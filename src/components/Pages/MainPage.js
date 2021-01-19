import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getBooksListRequest } from "../../actions";
import Autocomplete from "../Autocomplete";
import MediaCard from "../Card";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  list: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const MainPage = ({ getBooksListRequest, booksList, isLoading }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [showList, setShowList] = useState();

  useEffect(() => {
    if (value) {
      getBooksListRequest(value);
    }
  }, [value, getBooksListRequest]);

  const onChange = (e) => {
    setShowList(false);
    setValue(e.target.value);
  };

  const selectOption = () => {
    setShowList(true);
  };

  const searchBook = () => {
    getBooksListRequest(value);
    setShowList(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Autocomplete
          onChange={onChange}
          booksList={booksList}
          isLoading={isLoading}
          selectOption={selectOption}
          searchBook={searchBook}
          value={value}
        />
        {isLoading && <CircularProgress />}
        {showList && (
          <div className={classes.list}>
            {booksList && booksList.map((el) => (
              <MediaCard
                key={el.id}
                id={el.id}
                title={el.volumeInfo.title}
                author={
                  el.volumeInfo.authors && el.volumeInfo.authors.map((el) => el)
                }
                mediaLink={
                  el.volumeInfo.imageLinks &&
                  el.volumeInfo.imageLinks.smallThumbnail
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getBooksListRequest,
};

const mapStateToProps = (state) => {
  return {
    booksList: state.booksReducer.booksList,
    isLoading: state.booksReducer.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
