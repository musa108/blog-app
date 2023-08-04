import { useState, useEffect } from "react";
import "./App.css";
import AddBlog from "./components/AddBlog";
import Blog from "./components/Blog";
function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }

  useEffect(()=>{
    fetchBlog()
  },[]);
   
  const addBlog = (title, body) =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{

      method:'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    setBlogs((prevBlogs) => [data, ...prevBlogs])
  });
}
  const  deleteBlog = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
       method:"DELETE"
    })
    .then((response) =>{
      if (response.status === 200) {
         setBlogs(
          blogs.filter((blog)=>{
            return blog.id !== id;
          })
         )
      }
    })
  }



  return (
    <main className="flex flex-col justify-center bg-slate-700 font-serif ">
      <h1 className="text-blue-200 text-center text-[32px] ">Blog App</h1>
      <AddBlog addBlog={addBlog} />
      <h2>Blog</h2>
      <section className="grid grid-cols-2 gap-4 items-center ml-10">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            tittle={blog.tittle}
            body={blog.body}
            deleteBlog={deleteBlog}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
