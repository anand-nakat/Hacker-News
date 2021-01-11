import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import SingleNews from "./SingleNews";
const News = () => {
  const { loading, hits } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <main className="w-full px-10 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
      {hits.map((item) => {
        return <SingleNews key={item.objectID} {...item} />;
      })}
    </main>
  );
};

export default News;
