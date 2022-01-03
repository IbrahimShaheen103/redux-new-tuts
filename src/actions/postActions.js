import * as actionTypes from "../types";
export const getPost = () => ({ type: actionTypes.GET_POST });
export const getPostSuccess = (post) => ({
  type: actionTypes.GET_POST_SUCCESS,
  payload: post,
});
export const getPostFailure = () => ({ type: actionTypes.GET_POST_FAILURE });

export function fetchPost(id) {
  return async (dispatch) => {
    dispatch(getPost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      dispatch(getPostSuccess(data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
}
