import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow, BiBookmark } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useData } from "../contexts/DataContext";

const Card = () => {
  const { data, handleUpVote, handleDownVote } = useData();
  const { posts } = data;
  return (
    <div>
      {posts?.map((post) => (
        <React.Fragment key={post.postId}>
          <div className="max-w-[45rem] mx-auto flex gap-2 bg-white rounded-lg mt-5 p-5">
            <div className="flex flex-col items-center">
              <button onClick={() => handleUpVote(post.postId)}>
                <BiSolidUpArrow
                  size={32}
                  className={
                    post.upvotes - post.downvotes > post.downvotes
                      ? "text-blue-500"
                      : "text-slate-200"
                  }
                />
              </button>
              <span>{post.upvotes - post.downvotes}</span>
              <button onClick={() => handleDownVote(post.postId)}>
                <BiSolidDownArrow size={32} />
              </button>
            </div>
            <div className="p-3 flex items-start gap-4 flex-1 flex-col">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src="http://bit.ly/42Zm7tM"
                    alt="pic"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center">
                  <p>
                    Posted by{" "}
                    <span className="text-blue-500 font-semibold hover:cursor-pointer">
                      @{post.username}
                    </span>
                  </p>
                  <BsDot size={24} /> 1m
                </div>
              </div>
              <div className="text-4xl font-extrabold flex flex-col">
                <p>{post.post}</p>
                <div className="w-auto flex py-2">
                  {post.tags.map((tag) => (
                    <div className="w-auto flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                      <div className="text-xs font-normal leading-none flex-initial uppercase">
                        {tag}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[20px] font-semibold leading-7">
                  {post.postDescription}
                </p>
              </div>
              <div className="flex justify-between w-full border-t-2 pt-5">
                <VscComment size={24} />
                <AiOutlineShareAlt size={24} />
                <BiBookmark size={24} />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Card;
