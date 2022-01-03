import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentReducer,
})
export default rootReducer;
