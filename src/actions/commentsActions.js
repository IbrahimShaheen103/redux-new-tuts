import * as actionTypes from "../types";
export const getComments = () => ({ type: actionTypes.GET_COMMENTS });
export const getCommentsSuccess = (comments) => ({
  type: actionTypes.GET_COMMENTS_SUCCESS,
  payload: comments,
});
export const getCommentsFailure = () => ({
  type: actionTypes.GET_COMMENTS_FAILURE,
});

export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();

      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
}
