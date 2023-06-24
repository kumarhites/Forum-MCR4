import React from "react";
import { useData } from "../contexts/DataContext";
import Card from "./Card";

const Feed = () => {
  const { data } = useData();
  const {posts} = data;

  return (
    <div>
      <p className="text-3xl font-bold mt-8 text-slate-800">Latest Posts</p>
      <Card data={data} key={posts?.postId}/>
    </div>
  );
};

export default Feed;
