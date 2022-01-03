import * as actionTypes from "../types";
export const initialState = {
    loading: true,
    hasErrors: false,
    post: {},
  }
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.GET_POST:
        return { ...state, loading: true }
      case actionTypes.GET_POST_SUCCESS:
        return { post: action.payload, loading: false, hasErrors: false }
      case actionTypes.GET_POST_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }