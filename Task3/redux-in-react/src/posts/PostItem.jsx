export default function PostItem({ post }) {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
      <h1 className='text-xl font-semibold text-gray-800'>{post.title}</h1>
      <p className='mt-4 text-gray-700'>{post.body}</p>
    </div>
  );
}
