import jsonPlaceholder from "../apis/jsonPlaceholder";

// importing json placeholder from the api folder
export const fetchPosts = () => async dispatch => {
  // cannot use async/await inside here without a middleware
  // with thunk i can return a function inside an action
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    // we only care about the .data, not the whole response
    payload: response.data,
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
