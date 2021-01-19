import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBookRequest } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 60,
    justifyContent: "center",
    [theme.breakpoints.down(500)]: {
      padding: 10,
    },
  },
  description: {
    maxWidth: 600,
    marginLeft: 20,
  },
}));

const BookPage = ({ match, getBookRequest, book }) => {
  const classes = useStyles();
  useEffect(() => {
    getBookRequest(match.params.id);
  }, [getBookRequest, match.params.id]);
  if (book) {
    return (
      <div className={classes.container}>
        <img src={book.imageLinks.small} alt="book" />
        <div className={classes.description}>
          <h1>{book.title}</h1>
          <h3>{book.authors && book.authors.map((el) => el)}</h3>
          <div dangerouslySetInnerHTML={{ __html: book.description }} />
        </div>
      </div>
    );
  }
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    book: state.booksReducer.book,
  };
};

const mapDispatchToProps = {
  getBookRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
