export default (state = [], action) => {
  // returning values from reducers
  // first export it then import in the file desired
  switch (action.type) {
    // if an action is a fetch post, then send the data
    case "FETCH_POSTS":
      return action.payload;
    default:
      // otherwise just return whatever was sent
      return state;
  }
};
