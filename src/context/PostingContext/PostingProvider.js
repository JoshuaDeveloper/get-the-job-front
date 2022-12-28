import { useAuth } from "context/UserContext";
import React, { useEffect, useReducer } from "react";
import { changeApplicationState } from "services/application-service";
import { getCategories } from "services/jobs-services";
import { closePost, getPostings } from "services/posting-service";
import { PostingContext } from "./PostingContext";
import { postingReducer } from "./postingReducer";

export const PostingProvider = ({ children }) => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(postingReducer, {
    postings: [],
    categories: [],
  });

  useEffect(() => {
    getPostings(user.id).then(({ data }) => {
      dispatch({ type: "setPostings", payload: data });
    });
    getCategories().then(({ data }) => {
      dispatch({ type: "setCategories", payload: data });
    });
  }, [user.id]);

  const findPost = (id) => {
    return state.postings.find((post) => post.id === parseInt(id));
  };
  const addCategory = (newCategory) => {
    dispatch({ type: "addCategory", payload: newCategory });
  };
  const findCategory = (id) => {
    return state.categories.find((cat) => cat.id === id);
  };
  const closeMyPost = (id) => {
    closePost(user.id, id).then(() => {
      const c_postings = [...state.postings];
      const n_postings = c_postings.map((post) => {
        if (post.id === id) {
          return { ...post, closed: true };
        } else return post;
      });
      console.log(n_postings);
      dispatch({ type: "setPostings", payload: n_postings });
    });
  };
  const addPost = (newPost) => {
    dispatch({ type: "addPost", payload: {...newPost, applications: []} });
  };

  const changeState = (application_id, n_state) => {
    // console.log(state.postings.filter(post=>))

    changeApplicationState(user.id, application_id, { state: n_state }).then(
      () => {
        const n_postings = state.postings.map((post) => {
          const found = post.applications.find(
            (app) => app.id === application_id
          );
          console.log(found);
          if (found) {
            const n_post_applications = post.applications.map((app) =>
              app.id === application_id
                ? { ...app, state: n_state }
                : { ...app }
            );
            console.log(n_post_applications);
            return { ...post, applications: n_post_applications };
          } else return { ...post };
        });

        dispatch({ type: "setPostings", payload: n_postings });
      }
    );
  };
  return (
    <PostingContext.Provider
      value={{
        ...state,
        closeMyPost,
        findPost,
        findCategory,
        changeState,
        addPost,
        addCategory,
      }}
    >
      {children}
    </PostingContext.Provider>
  );
};
