export const applicationReducer = (state, action) => {
  switch (action.type) {
    case "setApplications":
      return action.payload;
    case "addApplication":
      return [...state, action.payload ]
    default:
      return [...state];
  }
};
