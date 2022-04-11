import { SHOW_BOOKS } from "./actionTypes";

export const showBooks = (payload) => {
  return {
    type: SHOW_BOOKS,
    payload,
  };
};
