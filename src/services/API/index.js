import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchBooksList = async (searchContent) => {
  const { data } = await axios
    .get(
      `${BASE_URL}?maxResults=40&q=${searchContent}&key=${process.env.REACT_APP_API_BOOKS_KEY}`
    )
    .catch((err) => err.response);
  return data;
};


export const fetchBook = async (bookId) => {
  const { data } = await axios
    .get(
      `${BASE_URL}/${bookId}?key=${process.env.REACT_APP_API_BOOKS_KEY}`
    )
    .catch((err) => err.response);
  return data;
};