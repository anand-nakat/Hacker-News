import React from "react";
import { useGlobalContext } from "./context";
const SingleNews = ({
  title,
  url,
  author,
  points,
  num_comments,
  story_title,
  story_url,
  objectID: id,
}) => {
  const { dispatch } = useGlobalContext();

  return (
    <article className="bg-gray-900 my-3 p-3 rounded-lg shadow-xl">
      <h2 className="font-bold text-gray-50 text-xl">
        {title || story_title}{" "}
      </h2>
      <div className="mt-1 mb-4 text-gray-300 text-lg flex space-x-4 items-center">
        <p>
          {points && `${points} points`} by {author}
        </p>
        <p>{num_comments && `| ${num_comments} comments`} </p>
      </div>
      <div className="flex space-x-10 items-center">
        <a
          href={url || story_url || "#"}
          target="_blank"
          rel="noreferrer"
          className=" text-blue-400 font-black rounded hover:text-blue-300"
        >
          {url || story_url ? "Read More" : "Link unavailable"}
        </a>

        <button
          className="text-red-400 font-bold hover:text-red-300"
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default SingleNews;
