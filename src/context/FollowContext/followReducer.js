export const followReducer = (state, action) => {
  switch (action.type) {
    case "setFollowsJob":
      return { ...state, followsJob: action.payload.followingsJob, followsRecruiter: action.payload.followingsRecruiter };
    default:
      return { ...state };
  }
};
