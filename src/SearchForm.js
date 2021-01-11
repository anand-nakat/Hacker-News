import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { dispatch, query } = useGlobalContext();
  return (
    <header className="w-full">
      <div className="text-4xl font-bold text-center text-pink-400">
        <a href="/">Hacker News </a>
      </div>
      <form
        className="max-w-sm md:max-w-lg my-10 flex flex-col mx-auto px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="query" className="text-blue-200 text-xl tracking-wide">
          Search any Article Topic
        </label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_QUERY",
              payload: { query: e.target.value, currentPage: 0 },
            })
          }
          className="bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold mt-2 px-4 py-1 rounded-lg text-gray-800 text-lg"
        />
      </form>
    </header>
  );
};

export default SearchForm;
