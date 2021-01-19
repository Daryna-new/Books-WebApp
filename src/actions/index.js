import {
  GET_BOOKS_LIST_REQUEST,
  GET_BOOKS_LIST_SUCCESS,
  GET_BOOKS_LIST_ERROR,
  GET_SINGLE_BOOK_REQUEST,
  GET_SINGLE_BOOK_SUCCESS,
  GET_SINGLE_BOOK_ERROR,
} from "./actionTypes";

export const getBooksListRequest = (searchContent) => {
  return {
    type: GET_BOOKS_LIST_REQUEST,
    payload: {
      searchContent,
    },
  };
};

export const getBooksListSucces = (booksList) => {
  return {
    type: GET_BOOKS_LIST_SUCCESS,
    payload: {
      booksList,
    },
  };
};

export const getBooksListError = (error) => {
  return {
    type: GET_BOOKS_LIST_ERROR,
    payload: {
      error,
    },
  };
};

export const getBookRequest = (bookId) => {
  return {
    type: GET_SINGLE_BOOK_REQUEST,
    payload: {
      bookId,
    },
  };
};

export const getBookSucces = (bookInfo) => {
  return {
    type: GET_SINGLE_BOOK_SUCCESS,
    payload: {
      bookInfo,
    },
  };
};

export const getBookError = (error) => {
  return {
    type: GET_SINGLE_BOOK_ERROR,
    payload: {
      error,
    },
  };
};
