import PostForm from "./posts/PostForm";
import PostList from "./posts/PostList";

function App() {
  return (
    <>
      <div className='text-center text-4xl my-4 text-slate-800 font-bold'>
        NGUYỄN DUY KHANG
      </div>
      <div className=''>
        <PostForm />
        <PostList />
      </div>
    </>
  );
}

export default App;
