import {
  GET_BOOKS_LIST_REQUEST,
  GET_BOOKS_LIST_SUCCESS,
  GET_BOOKS_LIST_ERROR,
  GET_SINGLE_BOOK_ERROR,
  GET_SINGLE_BOOK_REQUEST,
  GET_SINGLE_BOOK_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  booksList: [],
  error: null
};

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case GET_BOOKS_LIST_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_BOOKS_LIST_SUCCESS:
      return { ...state, isLoading: false, booksList: payload.booksList };
    case GET_SINGLE_BOOK_ERROR:
      return { ...state, isLoading: false, error: payload.error };
    case GET_SINGLE_BOOK_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_SINGLE_BOOK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          book: payload.bookInfo,
        };
    case GET_BOOKS_LIST_ERROR:
      return { ...state, isLoading: false, error: payload.error };
    default:
      return state;
  }
}
