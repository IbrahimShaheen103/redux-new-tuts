import * as actionTypes from '../types'

export const getPosts=()=>({
    type:actionTypes.GET_POSTS
})

export const getPostsSuccess = (posts) => ({
    type:actionTypes.GET_POSTS_SUCCESS,
    payload:posts
})

export const getPostsFailure = () => ({
    type: actionTypes.GET_POSTS_FAILURE,
  })


  // Combine them all in an asynchronous thunk
export function fetchPosts() {
    return async (dispatch) => {
      dispatch(getPosts())
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
  
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure())
      }
    }
  }