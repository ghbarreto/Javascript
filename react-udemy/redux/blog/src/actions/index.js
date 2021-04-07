import jsonPlaceholder from "../apis/jsonPlaceholder";

// importing json placeholder from the api folder
export const fetchPosts = () => async dispatch => {
  // cannot use async/await inside here without a middleware
  // with thunk i can return a function inside an action

  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
