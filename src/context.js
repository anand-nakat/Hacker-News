import React, { useEffect, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const AppContext = React.createContext();

const initialState = {
  loading: true,
  hits: [],
  currentPage: 0,
  query: "React",
  totalPages: 0,
};

const baseURL = `https://hn.algolia.com/api/v1/search?`;
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, hits, currentPage, query, totalPages } = state;
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "LOAD_DATA",
        payload: {
          loading: false,
          hits: data.hits,
          totalPages: data.nbPages,
          currentPage: state.currentPage,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    let url = `${baseURL}query=${query}&page=${currentPage}`;
    fetchData(url);
    // eslint-disable-next-line
  }, [query, currentPage]);

  return (
    <AppContext.Provider
      value={{ loading, hits, currentPage, query, totalPages, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
