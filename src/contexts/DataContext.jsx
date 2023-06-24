import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/feed");
      if (status === 200) {
        setData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpVote = (postId) => {
    setData((prevData) => {
      const updatedPosts = prevData.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            upvotes: post.upvotes + 1,
          };
        }
        return post;
      });

      return {
        ...prevData,
        posts: updatedPosts,
      };
    });
  };
  const handleDownVote = (postId) => {
    setData((prevData) => {
      const updatedPosts = prevData.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            upvotes: post.upvotes - 1,
          };
        }
        return post;
      });

      return {
        ...prevData,
        posts: updatedPosts,
      };
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider value={{ data, handleUpVote, handleDownVote }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
