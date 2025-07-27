import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-700 mt-2">{body}</p>
      <p className="text-xs text-gray-500 mt-1">Posted by User #{userId}</p>
    </div>
  );
};

export default PostCard;
