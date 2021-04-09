import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  // dummy data to get rid of the error of retuning undefined\
  users: usersReducer,
});
