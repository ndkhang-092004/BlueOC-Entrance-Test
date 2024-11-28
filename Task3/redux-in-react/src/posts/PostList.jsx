import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";
import PostItem from "./PostItem";

export default function PostList() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className='max-w-7xl mx-auto p-6'>
      {posts.isLoading && (
        <p className='text-center text-blue-500'>Loading...</p>
      )}
      {posts.error && <p className='text-center text-red-500'>{posts.error}</p>}
      {posts.posts.length > 0 ? (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {posts.posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div>No posts found...</div>
      )}
    </div>
  );
}
