import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

//? Step 2
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //? Step 3
  await dispatch(fetchPosts());
  //* The await keyword will make sure that we wait for the api request to be completed
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
//? -------------------------------------------------------

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

//? Non-memoized version
//? Step 1
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
//? ------------------------------------------
//? Memoize version
//* Question?:
//* - memoizing function runs only one time, to not overload the server network

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
// const response = await jsonPlaceholder.get(`/users/${id}`);
// dispatch({ type: "FETCH_USER", payload: response.data });
// });
