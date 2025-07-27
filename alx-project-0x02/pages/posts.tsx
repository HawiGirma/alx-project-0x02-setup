import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data: Array<{ title: string; body: string; userId: number }> =
        await res.json();

      const formattedData: PostProps[] = data.map((post) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;
