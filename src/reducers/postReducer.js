import * as actionTypes from "../types";
export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return { ...state, loading: true };
    case actionTypes.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actionTypes.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
