export const jobsReducer = (state, action) => {
  switch (action.type) {
    case "setJobs":
      return { ...state, jobs: action.payload };
    case "setCategories":
      return { ...state, categories: action.payload };
    case "addJob":
      const jobs = [...state.jobs];
      return { ...state, jobs: [...jobs, action.payload] };

    default:
      return { ...state };
  }
};
