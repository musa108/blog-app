import React from "react";

const Blog = (props) => {
  return (
    <div className="blog-card w-[400px] mt-4">
      <h2 className="blog-title">{props.title}</h2>
      <p className="blog-body bg-blue-600 rounded-md p-4">{props.body}</p>
      <button className="btn-delete rounded-sm bg-red-500 w-[120px] text-center mt-2" onClick={() => props.deleteBlog(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Blog;
