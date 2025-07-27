import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleNewPost = (data: { title: string; content: string }) => {
    setPosts([...posts, data]);
  };

  return (
    <div>
      <Header />
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      {showModal && (
        <PostModal
          onSubmit={handleNewPost}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="mt-4">
        {posts.map((post, i) => (
          <Card key={i} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
