export const userReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return action.payload;
    case "removeUser":
      return null
    default:
      return { ...state };
  }
};
