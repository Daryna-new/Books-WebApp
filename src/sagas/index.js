import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getBooksListSucces, getBooksListError, getBookSucces, getBookError } from "../actions";
import {
  GET_BOOKS_LIST_REQUEST,
  GET_SINGLE_BOOK_REQUEST,
} from "../actions/actionTypes";
import { fetchBooksList, fetchBook } from "../services/API";

export function* getBooksListSaga({ payload }) {
  try {
    yield delay(750);
    const { searchContent } = payload;
    const bookslist = yield call(fetchBooksList, searchContent);
    yield put(getBooksListSucces(bookslist.items));
  } catch (error) {
    yield put(getBooksListError(error));
  }
}

export function* getBookSaga({ payload }) {
  try {
    const { bookId } = payload;
    const book = yield call(fetchBook, bookId);
    yield put(getBookSucces(book.volumeInfo));
  } catch (error) {
    yield put(getBookError(error));
  }
}

export default function* () {
  yield takeLatest(GET_BOOKS_LIST_REQUEST, getBooksListSaga);
  yield takeLatest(GET_SINGLE_BOOK_REQUEST, getBookSaga)
}
