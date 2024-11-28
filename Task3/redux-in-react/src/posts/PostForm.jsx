import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./postSlice";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { userId, title, body };
    dispatch(createPost(newPost));

    setTitle("");
    setBody("");
    setUserId("");

    //Sau khi tao thi post moi tao se o duoi cung!
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg'
    >
      <h2 className='text-2xl font-bold mb-6 text-center'>Create a New Post</h2>

      <div className='mb-4'>
        <label
          htmlFor='userId'
          className='block text-sm font-medium text-gray-700'
        >
          User ID:
        </label>
        <input
          type='text'
          id='userId'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className='mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title:
        </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className='mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='body'
          className='block text-sm font-medium text-gray-700'
        >
          Body:
        </label>
        <textarea
          id='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className='mt-1 p-2 w-full h-32 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <button
        type='submit'
        className='w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Create Post
      </button>
    </form>
  );
}
