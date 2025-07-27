import { useState } from "react";

export default function PostModal({
  onSubmit,
}: {
  onSubmit: (data: { title: string; content: string }) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-bold mb-4">New Post</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 mb-2 w-full"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={() => onSubmit({ title, content })}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
