import React from "react";
import { useGlobalContext } from "./context";
const NavigationButtons = () => {
  const { dispatch, currentPage, totalPages, loading } = useGlobalContext();
  return (
    <div className="max-w-sm md:max-w-lg flex justify-center space-x-4 mx-auto">
      <button
        className={`bg-blue-500 hover:bg-blue-600 transition-colors font-bold px-2 text-lg text-white focus:outline-none ${
          loading ? "cursor-wait" : null
        }`}
        onClick={() =>
          dispatch({
            type: "CHANGE_PAGE",
            payload: { type: "DEC", currentPage: 0 },
          })
        }
        disabled={loading}
      >
        Prev
      </button>

      <p className="font-semibold text-blue-100 text-lg">
        Page {currentPage + 1} of {totalPages}
      </p>
      <button
        className={`bg-blue-500 hover:bg-blue-600 transition-colors font-bold px-2 text-lg text-white focus:outline-none ${
          loading ? "cursor-wait" : null
        }`}
        onClick={() =>
          dispatch({
            type: "CHANGE_PAGE",
            payload: { type: "INC", currentPage: 0 },
          })
        }
        disabled={loading}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
