import { useState,useEffect } from "react";
import "./App.css";


function App() {
  const [blogs, setBlogs] = useState([]);

  // useEffect(()=>{
  //    fetch('https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCNWjRNjaJwCTNM0qUBgq4uHDyNveN6eN0')
  //    .then((response) => response.json())
  //    .then((data)=>{
  //    setBlogs(data);
  //    })
  //    .catch((err)=>{
  //     console.log(err.message);
  //    })
  // })

  // const AddPost =(name,url) =>{
  //   fetch('https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCNWjRNjaJwCTNM0qUBgq4uHDyNveN6eN0',{
  //     method:'POST',
  //     body: JSON.stringify({
  //       name:name,
  //       url:url,
  //       userId:Math.random().toString(36).slice(2),
  //     }),
  //     headers:{
  //       'content-type':'application/json;charset=UTF-8',
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setBlogs((prevBlogs) => [data, ...prevBlogs])
  //   })
  

  // }
  // const deletePost = (id) => {
  //   fetch(`https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCNWjRNjaJwCTNM0qUBgq4uHDyNveN6eN0/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then((response) => {
  //     if(response.status === 200) {
  //       setPosts(
  //         posts.filter((post) => {
  //           return post.id !== id;
  //         })
  //       )
  //     }
  //   })
  // };
  https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCNWjRNjaJwCTNM0qUBgq4uHDyNveN6eN0
   useEffect(()=>{
    fetch('https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCNWjRNjaJwCTNM0qUBgq4uHDyNveN6eN0')
    .then((response)=> response.json())
    .then((data) =>{
      console.log(data);
      setBlogs(data);
    })
   },[])
   return (
    <div className="posts-container">
       {blogs.map((blog) => {
          return (
             <div className="post-card" key={blog.id}>
                <h2 className="post-title">{blog.name}</h2>
                <p className="post-body">{blog.description}</p>
                <div className="button">
                <div className="delete-btn">Delete</div>
                </div>
             </div>
          );
       })}
    </div>
    );
}

export default App;
