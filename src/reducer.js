export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        loading: action.payload.loading,
        totalPages: action.payload.totalPages,
        hits: action.payload.hits,
        currentPage: action.payload.currentPage,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };
    case "CHANGE_QUERY":
      return {
        ...state,
        query: action.payload.query,
        currentPage: action.payload.currentPage,
      };
    case "CHANGE_PAGE":
      if (action.payload.type === "INC") {
        let newPage = state.currentPage + 1;
        if (newPage > state.totalPages - 1) {
          newPage = 0;
        }
        return {
          ...state,
          currentPage: newPage,
        };
      }
      if (action.payload.type === "DEC") {
        var newPage = state.currentPage - 1;
        if (newPage < 0) {
          newPage = state.totalPages - 1;
        }
        return {
          ...state,
          currentPage: newPage,
        };
      }
      break;

    default:
      return state;
  }
};
