export const postingReducer = (state, action) => {
  switch (action.type) {
    case "setPostings":
      return { ...state, postings: action.payload };
    case "setCategories":
      return { ...state, categories: action.payload };
    case "addCategory":
      return { ...state, categories: [...state.categories, action.payload] };
      case "addPost":
        return { ...state, postings: [...state.postings, action.payload] };
    default:
      return { ...state };
  }
};
